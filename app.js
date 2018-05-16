//app.js
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        //发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: this.globalData.BASE_PATH +'/mini_user/login.htm',
          data: {
            code: res.code
          },
          success: function(data) {
            console.log(data);
            wx.setStorage({
              key: '_sessionid_',
              data: data.data.session_id,
            })
          }
        })
        console.log(res)
      }
    });
    let citys = [];
    // logs.unshift(Date.now())
    wx.request({
      url: this.globalData.BASE_PATH + '/mini_data/city/findAll.htm',
      success: function (result) {
        citys = result.data;
        wx.setStorage({
          key: 'citys',
          data: citys,
        });
      }
    });
  },
  globalData: {
    BASE_PATH: 'https://www.kezhanbang.cn',
    userInfo: null,
    address: null,
    categorys: [
      {
        id: 'FOOD',
        name: '美食',
        current: false,
        desc: 'Handpicked activities just for you', loading: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/FOOD.jpg',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/FOOD.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 45
      },
      {
        id: 'NATURAL_LIFE',
        name: '自然生活',
        desc: 'Handpicked activities just for you',
        current: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/NATURAL_LIFE.jpg',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/NATURAL_LIFE.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 45
      },
      {
        id: 'SPORT',
        name: '景点',
        desc: 'Handpicked activities just for you',
        current: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/SPORT.jpg',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/SPORT.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 45
      },
      {
        id: 'CULTURE_AND_THEME',
        name: '文化与主题',
        desc: 'Handpicked activities just for you',
        current: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/CULTURE_AND_THEME.jpg',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/CULTURE_AND_THEME.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 45
      },
      {
        id: 'PERFORM',
        name: '表演',
        desc: 'Handpicked activities just for you',
        current: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/PERFORM.jpg',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/PERFORM.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 45
      },
      {
        id: 'MUSIC',
        name: '音乐会',
        desc: 'Handpicked activities just for you',
        current: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/MUSIC.jpg',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/MUSIC.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 45
      },
      {
        id: 'MOTION',
        name: '运动',
        desc: 'Handpicked activities just for you',
        current: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/MOTION.jpg',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/MOTION.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 45
      }
    ]
  }
})