// pages/search/search.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: '',
    dataLists: []
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
    this.bindFocus();
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
  bindFocus: function () {
    this.setData({
      focus: true
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      dataLists: []
    })
    this.setData({
      keyword: e.detail.value.trim()
    });
    if (e.detail.value.trim() !== "")
      this.loadData();
  },
  loadData: function () {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    that.setData({
      isHideLoadMore: false
    })
    wx.request({
      url: app.globalData.BASE_PATH + '/mini_data/party/search.htm',
      data: {
        key: that.data.keyword
      },
      success: function (result) {
        if (result.data.length == 0) {
          that.setData({
            LoadingComplete: true
          });
        }else{
          that.setData({
            LoadingComplete: false
          });
        }
        var partys = result.data;
        wx.hideLoading();
        partys.forEach(item => {
          // that.loadImage(item);
          wx.request({
            url: app.globalData.BASE_PATH + '/mini_data/party/load_partyCovers.htm',
            data: {
              partyId: item.partyId
            },
            success: function (res) {
              const allPartys = that.data.dataLists;
              item.ossImage = res.data;
              allPartys.push(item);
              that.setData({
                dataLists: allPartys,
              })
            }
          })
        })
        that.setData({
          isHideLoadMore: true,
          startRow: that.data.startRow + 1
        });
      },
      fail: function () {
        wx.hideLoading();
      }
    })
  }
})