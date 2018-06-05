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
    address: 'sc_cd',
    categorys: [
      {
        id: 'CULTURE_AND_THEME',
        name: '文化与主题',
        desc: '琴棋书画诗酒茶',
        current: false,
        list_img: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/list_CULTURE_AND_THEME.jpg',
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/CULTURE_AND_THEME.jpg',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/CULTURE_AND_THEME.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 0
      },
      {
        id: 'FOOD',
        name: '美食',
        current: false,
        desc: '精选食物与私房菜', loading: false,
        list_img: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/list_FOOD.jpg',
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/FOOD.jpg',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/FOOD.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 0
      },
      {
        id: 'NATURAL_LIFE',
        name: '自然生活',
        desc: '让生活回归山野',
        current: false,
        list_img: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/list_NATURAL_LIFE.jpg',
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/NATURAL_LIFE.jpg',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/NATURAL_LIFE.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 0
      },
      {
        id: 'SPORT',
        name: '景点',
        desc: '去景点玩也有趣',
        current: false,
        list_img: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/list_SPORT.jpg',
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/SPORT.jpg',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/SPORT.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 0
      },
      {
        id: 'PERFORM',
        name: '表演',
        desc: '每一种传承都是祖先的智慧',
        current: false,
        list_img: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/list_PERFORM.jpg',
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/PERFORM.jpg',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/PERFORM.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 0
      }
      // {
      //   id: 'MUSIC',
      //   name: '音乐会',
      //   desc: '感受情感中枢的颤抖',
      //   current: false,
      //   list_img: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/list_MUSIC.jpg',
      //   img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/MUSIC.jpg',
      //   img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/MUSIC.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20',
      //   total: 0
      // },
      // {
      //   id: 'MOTION',
      //   name: '运动',
      //   desc: '体验各种生命的源泉',
      //   current: false,
      //   list_img: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/list_MOTION.jpg',
      //   img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/MOTION.jpg',
      //   img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/MOTION.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20',
      //   total: 0
      // }
    ]
  }
})