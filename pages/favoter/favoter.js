// pages/favoter/favoter.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataLists: [],
    LoadingComplete: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    wx.request({
      url: app.globalData.BASE_PATH + '/mini_data/favoter/findAll.htm',
      data: {
        sessionId: wx.getStorageSync('_sessionid_')
      },
      success: function (res) {
        var favoters = res.data;
        if (favoters.length == 0) {
          var all = that.data.dataLists;
          if (all.length == 0) {
            that.setData({
              LoadingComplete: true
            })
          }
        }
        favoters.forEach(item => {
          wx.request({
            url: app.globalData.BASE_PATH + '/mini_data/party/findOneById.htm',
            data: {
              partyId: item.partyId
            },
            success: function(res) {
              var partys = that.data.dataLists;
              var party = res.data;
              wx.request({
                url: app.globalData.BASE_PATH + '/mini_data/party/load_partyCovers.htm',
                data: {
                  partyId: party.partyId
                },
                success: function (res) {
                  party.ossImage = res.data;
                  partys.push(party);
                  that.setData({
                    dataLists: partys,
                  })
                }
              })
            }
          })
        })
      } 
    })
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
    wx.setTopBarText({
      text: '我的收藏',
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
  
  }
})