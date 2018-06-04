// pages/partys/partys.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataLists: [],
    animationData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      partyId: options.partyId
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var partyIds = this.data.partyId.split('-');
    for (var i = 0; i < partyIds.length - 1; i++) {
      this.loadData(partyIds[i]);
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // var animation = wx.createAnimation({
    //   duration: 1000,
    //   timingFunction: 'ease',
    // })
    // this.animation = animation;
    // animation.opacity(0).translateX(-1000).step();
    // this.setData({
    //   animationData: animation.export()
    // });
    // setTimeout(function () {
    //   animation.opacity(.5).translateX(-500).step();
    //   this.setData({
    //     animationData: animation.export()
    //   })
    // }.bind(this), 500);
    // setTimeout(function () {
    //   animation.opacity(1).translateX(0).step();
    //   this.setData({
    //     animationData: animation.export()
    //   })
    // }.bind(this), 1000);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // var animation = wx.createAnimation({
    //   duration: 1000,
    //   timingFunction: 'ease',
    // })
    // this.animation = animation;
    // animation.opacity(0).translateX(-1000).step();
    // this.setData({
    //   animationData: animation.export()
    // });
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
  loadData: function (partyId) {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    wx.request({
      url: app.globalData.BASE_PATH + '/mini_data/party/findOneById.htm',
      data: {
        partyId: partyId
      },
      success: function (result) {
        if (result.data.length == 0) {
          that.setData({
            LoadingComplete: true
          });
        }
        var party = result.data;
        wx.hideLoading();
          // that.loadImage(item);
        wx.request({
          url: app.globalData.BASE_PATH + '/mini_data/party/load_partyCovers.htm',
          data: {
            partyId: party.partyId
          },
          success: function (res) {
            const allPartys = that.data.dataLists;
            party.ossImage = res.data;
            allPartys.push(party);
            that.setData({
              dataLists: allPartys,
            })
          }
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