var typesTemplate = require('../../template/page_types/page_types.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataLists: [],
    isHideLoadMore: true,
    pageSize: 9,
    startRow: 0,
    LoadingComplete: false
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
    });
  
    this.setData({
      itemId: options.categoryId,
      selectType: selectT
    });
    this.loadData();
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
    if (this.data.LoadingComplete)
      return;
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
      selectType: _selectType,
      pageSize: 6,
      startRow: 0,
      itemId: _selectType.id,
      dataLists: [],
      LoadingComplete: false
    });
    this.loadData();
  },
  loadData: function() {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    that.setData({
      isHideLoadMore: false
    })
    wx.request({
      url: app.globalData.BASE_PATH + '/mini_data/party/findAllByType.htm',
      data: {
        type: that.data.itemId,
        pageSize: that.data.pageSize,
        startRow: that.data.startRow,
        cityId: app.globalData.address
      },
      success: function(result) {
        if(result.data.length == 0) {
          that.setData({
            LoadingComplete: true
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
      fail: function() {
        wx.hideLoading();
      }
    })
  }
})