//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res)
      }
    })
  },
  globalData: {
    BASE_PATH: 'https://www.kezhanbang.cn/',
    userInfo: null,
    address: null,
    categorys: [
      {
        id: 'c1',
        name: '玩法活动1',
        desc: 'Handpicked activities just for you',
        current: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/Workshops_Classes_No_Shadow.png',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/Workshops_Classes_No_Shadow.png?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 45
      },
      {
        id: 'c2',
        name: '玩法活动2',
        current: false,
        desc: 'Handpicked activities just for you', loading: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/CultureTheme.png',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/CultureTheme.png?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 45
      },
      {
        id: 'c3',
        name: '玩法活动3',
        desc: 'Handpicked activities just for you',
        current: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/Water_Sports_No_Shadow.png',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/Water_Sports_No_Shadow.png?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 45
      },
      {
        id: 'c4',
        name: '玩法活动4',
        desc: 'Handpicked activities just for you',
        current: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/vantigo.jpg',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/vantigo.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 45
      },
      {
        id: 'c5',
        name: '玩法活动5',
        desc: 'Handpicked activities just for you',
        current: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/in_the_sky_no_shadow_2x.png',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/in_the_sky_no_shadow_2x.png?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 45
      },
      {
        id: 'c6',
        name: '玩法活动6',
        desc: 'Handpicked activities just for you',
        current: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/Food_Nightlife_Shadow.png',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/Food_Nightlife_Shadow.png?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 45
      },
      {
        id: 'c7',
        name: '玩法活动7',
        desc: 'Handpicked activities just for you',
        current: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/CultureTheme.png',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/CultureTheme.png?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 45
      },
      {
        id: 'c8',
        name: '玩法活动8',
        desc: 'Handpicked activities just for you',
        current: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/boats2.png',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/boats2.png?x-oss-process=image/resize,m_lfit,h_20,w_20',
        total: 45
      }
    ]
  }
})