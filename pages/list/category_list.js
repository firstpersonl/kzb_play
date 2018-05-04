var typesTemplate = require('../../template/page_types/page_types.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataLists: []
  },
  lower() {
    var result = this.data.res;

    var resArr = [];
    for (let i = 0; i < 10; i++) {
      resArr.push(i);
    };
    var cont = result.concat(resArr);
    console.log(resArr.length);
    if (cont.length >= 100) {
      wx.showToast({ //如果全部加载完成了也弹一个框
        title: '我也是有底线的',
        icon: 'success',
        duration: 300
      });
      return false;
    } else {
      wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
        title: '加载中',
        icon: 'loading',
      });
      setTimeout(() => {
        this.setData({
          res: cont
        });
        wx.hideLoading();
      }, 1500)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var selectT = app.globalData.categorys.find((element, index) => {
      if (element.id == options.categoryId) {
        return element;
      }
    })
    wx.setNavigationBarTitle({
      title: selectT.name
    })
    this.setData({
      isHideLoadMore: true,
      dataLists: [
        {
          goodId: 7,
          name: 'OLAY玉兰油精油沐浴露玫瑰滋养二合一450ml',
          url: 'bill',
          imageurl: 'https://d2u09083uyrwez.cloudfront.net/api/file/Y7dSDkhBTDCK0UDhuLgo/convert?w=1500',
          newprice: "￥36.60",
          oldprice: "￥40.00",
        },
        {
          goodId: 10,
          name: '兰蔻玫瑰清滢保湿柔肤水嫩肤水化妆水400ml补水保湿温和不刺激',
          url: 'bill',
          imageurl: 'https://d2u09083uyrwez.cloudfront.net/api/file/Y7dSDkhBTDCK0UDhuLgo/convert?w=1500',
          newprice: "￥30.00",
          oldprice: "￥80.00",
        }, {
          goodId: 11,
          name: 'Lancome/兰蔻清莹柔肤爽肤水/粉水400ml补水保湿玫瑰水化妆水',
          url: 'bill',
          imageurl: 'https://d2u09083uyrwez.cloudfront.net/api/file/Y7dSDkhBTDCK0UDhuLgo/convert?w=1500',
          newprice: "￥30.00",
          oldprice: "￥80.00",
        },
        {
          goodId: 12,
          name: '美国CLINIQUE倩碧黄油无油/特效润肤露125ml',
          url: 'bill',
          imageurl: 'https://d2u09083uyrwez.cloudfront.net/api/file/U66hdIF3RmGVXmj9inI6/convert?w=1500',
          newprice: "￥239.00",
          oldprice: "￥320.00",
        },
        {
          goodId: 13,
          name: '法国LANCOME兰蔻柔皙轻透隔离防晒乳霜50ML2017年3月到期',
          url: 'bill',
          imageurl: 'https://d2u09083uyrwez.cloudfront.net/api/file/U66hdIF3RmGVXmj9inI6/convert?w=1500',
          newprice: "￥130.00",
          oldprice: "￥180.00",
        },
      ],
      itemId: options.categoryId,
      selectType: selectT
    });
    typesTemplate.typesMain("types", options.categoryId, this, app.globalData.categorys);
  },
  //下拉刷新
  onPullDownRefresh: function () {
    // wx.showNavigationBarLoading() //在标题栏中显示加载

    // //模拟加载
    // setTimeout(function () {
    //   // complete
    //   wx.hideNavigationBarLoading() //完成停止加载
    //   wx.stopPullDownRefresh() //停止下拉刷新
    // }, 1500);
  },
  //加载更多
  onReachBottom: function () {
    this.isHideLoadMore = false;
    this.loadData();
  },
  changeCategory: function(event) {
    var _categorys = this.data.bindData.types;
    var _bindData = {};
    var _scrollLeft = 0;
    var _selectType = {};
    _categorys.find((element, index) => {
      if (element.id == event.currentTarget.dataset.category.id) {
        _categorys[index]['current'] = true;
        _selectType = element;
        wx.setNavigationBarTitle({
          title: element.name
        })
        _scrollLeft = (index > 1 ? (index - 1) * (wx.getSystemInfoSync().windowWidth / 3) : 0);
      } else {
        _categorys[index]['current'] = false;
      }
    });
    _bindData['types'] = _categorys;
    this.setData({
      bindData: _bindData,
      scrollLeft: _scrollLeft,
      selectType: _selectType
    });
    this.loadData();
  },
  loadData: function() {
    var that = this;
    wx.request({
      url: app.globalData.BASE_PATH + 'findAllByCategory',
      data: {
        category: 'c3',
        pageSize: 10,
        pageNo: 2
      },
      success: function() {
        that.isHideLoadMore = true;
        that.setData({
          isHideLoadMore: true
        })
      },
      fail: function() {
        that.isHideLoadMore = true;
        that.setData({
          isHideLoadMore: true
        })
      }
    })
  }
})