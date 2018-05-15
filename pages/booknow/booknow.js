// pages/booknow/booknow.js
import initCalendar, { getSelectedDay, jumpToToday } from '../../template/calendar/index';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalTickets: 1,
    partyId: null,
    sureDays:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      partyId: options.partyId
    })
  },
  onShow: function () {
    const that = this;
    initCalendar({
      disablePastDay: true, // 是否禁选过去日期
      // multi: true, // 是否开启多选,
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
        })
      },
    });
  },
  /**
   * 跳转至今天
   */
  jump() {
    jumpToToday();
  },
  to_tickets() {
    if (this.data.calendar.selectedDay.length == 0) {
      wx.showModal({
        title: '提示',
        content: '请选择时间。',
        confirmColor: '#fff200;',
        showCancel: false
      })
    } else {
      const selectDay = this.data.calendar.selectedDay[0];
      selectDay.partyId = this.data.partyId;
      wx.setStorage({
        key: 'selectDay',
        data: selectDay,
      })
      wx.navigateTo({
        url: '../tickets/tickets'
      })
    }
  }
})