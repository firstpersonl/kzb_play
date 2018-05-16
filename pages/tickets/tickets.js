// pages/tickets/tickets.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalTickets: 1,
    selectDay: {},
    phone: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const that = this;
    wx.getStorage({
      key: 'selectDay',
      success: function (res) {
        that.setData({
          selectDay: res.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  totalAdd: function() {
    const totalNumber = this.data.totalTickets;
    if(this.data.selectDay.sureNumber<totalNumber+1){
      wx.showModal({
        title: '提示',
        content: '最多可参加报名' + totalNumber +'人。',
        confirmColor: '#fff200;',
        showCancel: false
      })
    }else{
      this.setData({
        totalTickets: totalNumber + 1
      })
    }
  },
  totalReduce: function () {
    const totalNumber = this.data.totalTickets;
    if(totalNumber == 1) {
      wx.showModal({
        title: '提示',
        content: '人数不能再少了。',
        confirmColor: '#fff200;',
        showCancel: false
      })
    } else {
      this.setData({
        totalTickets: totalNumber - 1
      })
    }
  },
  toPay: function() {
    const that = this;
    var sessionId;
    if(!that.data.phone) {
      that.bindFocus();
      return;
    }
    wx.getStorage({
      key: '_sessionid_',
      success: function(res) {
        sessionId = res.data;
        wx.showLoading({
          title: '加载中'
        })
        wx.request({
          url: app.globalData.BASE_PATH + '/wxpay/mini_payment.htm',
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          data: { 
            sessionId: sessionId,
            partyId: that.data.selectDay.partyId,
            phone: that.data.phone,
            number: that.data.totalTickets,
            selectTime: '' + that.data.selectDay.year +'-'+ (that.data.selectDay.month < 10 ? '0' + that.data.selectDay.month : '' + that.data.selectDay.month) +'-'+ (that.data.selectDay.day < 10 ? '0' + that.data.selectDay.day : that.data.selectDay.day)+' 00:00:00',
            dayId: that.data.selectDay.id
          },
          method: 'POST',
          success: function (result) {
            console.log(result.data);
            wx.hideLoading();
            wx.requestPayment({
              'timeStamp': result.data.timeStamp,
              'nonceStr': result.data.nonceStr,
              'package': 'prepay_id='+result.data.package_,
              'signType': 'MD5',
              'paySign': result.data.paySign,
              'success': function (res) {
                console.log(res)
              },
              'fail': function (res) {
                console.log(res)
              }
            })
          }
        })
      }
    })
    
  },
  bindKeyInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  bindFocus: function() {
    this.setData({
      focus: true
    })
  }
})