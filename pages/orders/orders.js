// pages/orders/orders.js
var time = require('../../utils/time.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders: []
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
    const openId = wx.getStorageSync("_sessionid_");
    const that = this;
    wx.setNavigationBarTitle({
      title: '我的订单',
    })
    wx.request({
      url: app.globalData.BASE_PATH + '/mini_data/orders/findAll.htm',
      data: {
        sessionId: openId
      },
      success: function(res) {
        var orders = res.data;
        
        orders.forEach(order => {
          wx.request({
            url: app.globalData.BASE_PATH + '/mini_data/party/findOneById.htm',
            data: {
              partyId: order.partyId
            },
            success: function (res_) {
              var partyArr = that.data.orders || [];
              order.playTime = time.formatTimeTwo(order.playTime,'Y/M/D');
              partyArr.push({order: order,party: res_.data});
              that.setData({
                orders: partyArr
              })
            }
          })
        });
      }
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
  
  }
})