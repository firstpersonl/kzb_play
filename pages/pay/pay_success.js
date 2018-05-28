// pages/pay/pay_success.js
const app = getApp();
Page({
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '预定成功'
    });
  },
  toIndex: function() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  }
})