// pages/tickets/tickets.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalTickets: 1,
    partyId: null,
    selectDay: {}
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
  }
})