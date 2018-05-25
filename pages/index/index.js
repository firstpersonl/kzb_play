//index.js
//引入图片预加载组件
const ImgLoader = require('../../utils/img-loader.js')
var template = require('../tabbar/tabbar.js');

//获取应用实例
const app = getApp()

Page({
  data: {
    categorys: [],
    citys: [],
    index: 0
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    console.log('citys-id:' + this.data.citys[e.detail.value].id);
    this.setData({
      index: e.detail.value
    })
    wx.showLoading({
      title: '加载中',
    })
    app.globalData.address = this.data.citys[e.detail.value].id;
    this.loadTypeCount();
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  onLoad: function() {
    template.tabbar("tabBar", 0, this);//0表示第一个tabbar
  },
  onShow: function () {
    this.loadTypeCount();
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '诗意生活与有趣玩法',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  loadTypeCount: function() {
    // 加载玩法分类数量统计
    let typeCounts = [];
    const that = this;
    var citys = wx.getStorageSync('citys') || {id: "sc_cd",cityName: "成都"};
    that.setData({
      citys: citys
    })
    wx.request({
      url: app.globalData.BASE_PATH + '/mini_data/party/typeCounts.htm',
      data: {
        cityId: citys[that.data.index].id
      },
      success: function (result) {
        typeCounts = result.data;
        var category = app.globalData.categorys;
        category.forEach(item => {
          if (typeCounts.length == 0) {
            item.total = 0;
          }
          typeCounts.forEach(typec => {
            if (typec.partyType == item.id)
              item.total = typec.numberCount;
          })
        });
        wx.setStorageSync('typeCounts', typeCounts)
      
        var countTypes;
        wx.getStorage({
          key: 'typeCounts',
          success: function (res) {
            countTypes = res.data;
            category.forEach(item => {
              countTypes.forEach(typec => {
                if (typec.partyType == item.id)
                  item.total = typec.numberCount;
              })
            })
            that.setData({
              categorys: category
            });
            
          }
        })
      }
    });
  },
  toSerachPage: function() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }
})
