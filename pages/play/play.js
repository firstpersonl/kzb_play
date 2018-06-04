// pages/play/play.js
import initCalendar, { getSelectedDay, jumpToToday } from '../../template/calendar/index';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    animationText: {}
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
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    var animationtext = wx.createAnimation({
      duration: 1500,
      timingFunction: 'ease',
    })

    this.animation = animation;
    animation.opacity(0).translateX(-1000).step();
    this.setData({
      animationData: animation.export()
    });
    setTimeout(function () {
      animation.opacity(.5).translateX(-500).step();
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 500);
    setTimeout(function () {
      animation.opacity(1).translateX(0).step();
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000);

    this.animationtext = animationtext;
    animationtext.opacity(0).step();
    this.setData({
      animationText: animationtext.export()
    });

    setTimeout(function () {
      animationtext.opacity(.3).step();
      this.setData({
        animationText: animationtext.export()
      })
    }.bind(this), 500);

    setTimeout(function () {
      animationtext.opacity(.7).step();
      this.setData({
        animationText: animationtext.export()
      })
    }.bind(this), 1000);

    setTimeout(function () {
      animationtext.opacity(1).step();
      this.setData({
        animationText: animationtext.export()
      })
    }.bind(this), 1500);

    const that = this;
    initCalendar({
      disablePastDay: true, // 是否禁选过去日期
      // multi: true, // 是否开启多选,
      loadDataPath: app.globalData.BASE_PATH + '/mini_data/party/allDays.htm',
      /**
       * 选择日期后执行的事件
       * @param { object } currentSelect 当前点击的日期
       * @param { array } allSelectedDays 选择的所有日期（当mulit为true时，才有allSelectedDays参数）
       */
      afterTapDay: (currentSelect, allSelectedDays) => {
        console.log('当前点击的日期', currentSelect);
        allSelectedDays && console.log('选择的所有日期', allSelectedDays);
        console.log('getSelectedDay方法', getSelectedDay());
      },
      /**
       * 日期点击事件（此事件会完全接管点击事件）
       * @param { object } currentSelect 当前点击的日期
       * @param { object } event 日期点击事件对象
       */
      onTapDay(currentSelect, event) {
        console.log(currentSelect);
        console.log(event);
        const calendar = that.data.calendar;
        calendar.selectedDay = [currentSelect];
        that.setData({
          calendar: calendar
        });
        wx.navigateTo({
          url: '/pages/partys/partys?partyId=' + currentSelect.partyId,
        })
      },
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation;
    animation.opacity(0).translateX(-1000).step();
    this.setData({
      animationData: animation.export()
    });
    animation.opacity(0).translateX(0).step();
    this.setData({
      animationText: animation.export()
    });
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