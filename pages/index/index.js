//index.js
//引入图片预加载组件
// const ImgLoader = require('../../utils/img-loader.js')
var template = require('../tabbar/tabbar.js');

//获取应用实例
const app = getApp()

Page({
  data: {
    categorys: [],
    array: [{addName: '成都',id: 'cd001'}, {addName: '上海',id: 'sh002'}],
    index: 0
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    // wx.showLoading({

    // })
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)

    this.setData({
      index: e.detail.value
    })
  },
  onLoad: function() {
    template.tabbar("tabBar", 0, this);//0表示第一个tabbar
    // this.categorys = app.globalData.categorys;
    this.setData({
      categorys: app.globalData.categorys
    })
    
    app.globalData.address = { addName: '成都', id: 'cd001' }
    
  },
  onReady: function () {
    //初始化图片预加载组件，并指定统一的加载完成回调
    // this.imgLoader = new ImgLoader(this);
    // this.data.categorys.forEach(item => {
    //   this.imgLoader.load(item.img_url, (err, data) => {
    //     const imgList = this.data.categorys.map(item => {
    //       if (item.img_url == data)
    //         item.loaded = true
    //       return item
    //     })
    //     this.setData({ categorys: imgList })
    //   })
    // })
    
  }
})
