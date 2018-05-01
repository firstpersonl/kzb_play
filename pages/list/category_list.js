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
    })

  },
  //下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  //加载更多
  onReachBottom: function () {
    console.log('加载更多')
    setTimeout(() => {
      this.setData({
        isHideLoadMore: true,
        recommends: [
          {
            goodId: 7,
            name: 'OLAY玉兰油精油沐浴露玫瑰滋养二合一450ml',
            url: 'bill',
            imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161213/148162245074.jpg',
            newprice: "￥36.60",
            oldprice: "￥40.00",
          },
          {
            goodId: 10,
            name: '兰蔻玫瑰清滢保湿柔肤水嫩肤水化妆水400ml补水保湿温和不刺激',
            url: 'bill',
            imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057937593.jpg',
            newprice: "￥30.00",
            oldprice: "￥80.00",
          }, {
            goodId: 11,
            name: 'Lancome/兰蔻清莹柔肤爽肤水/粉水400ml补水保湿玫瑰水化妆水',
            url: 'bill',
            imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
            newprice: "￥30.00",
            oldprice: "￥80.00",
          },
          {
            goodId: 12,
            name: '美国CLINIQUE倩碧黄油无油/特效润肤露125ml',
            url: 'bill',
            imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
            newprice: "￥239.00",
            oldprice: "￥320.00",
          },
          {
            goodId: 13,
            name: '法国LANCOME兰蔻柔皙轻透隔离防晒乳霜50ML2017年3月到期',
            url: 'bill',
            imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058014894.jpg',
            newprice: "￥130.00",
            oldprice: "￥180.00",
          },
        ],
      })
    }, 1000)
  }
})