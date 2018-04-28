//index.js
//引入图片预加载组件
const ImgLoader = require('../../utils/img-loader.js')
var template = require('../tabbar/tabbar.js');

//获取应用实例
const app = getApp()

Page({
  data: {
    categorys: [
      {
        id: 1,
        name: 'INSIDRE',
        desc: 'Handpicked activities just for you',
        loaded: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/Workshops_Classes_No_Shadow.png',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/Workshops_Classes_No_Shadow.png?x-oss-process=image/resize,m_lfit,h_20,w_20'
      },
      {
        id: 2,
        name: 'INSIDRE',
        loaded: false,
        desc: 'Handpicked activities just for you', loading: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/CultureTheme.png',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/CultureTheme.png?x-oss-process=image/resize,m_lfit,h_20,w_20'
      },
      {
        id: 3,
        name: 'INSIDRE',
        desc: 'Handpicked activities just for you',
        loaded: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/Water_Sports_No_Shadow.png',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/Water_Sports_No_Shadow.png?x-oss-process=image/resize,m_lfit,h_20,w_20'
      },
      {
        id: 4,
        name: 'INSIDRE',
        desc: 'Handpicked activities just for you',
        loaded: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/vantigo.jpg',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/vantigo.jpg?x-oss-process=image/resize,m_lfit,h_20,w_20'
      },
      {
        id: 5,
        name: 'INSIDRE',
        desc: 'Handpicked activities just for you',
        loaded: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/in_the_sky_no_shadow_2x.png',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/in_the_sky_no_shadow_2x.png?x-oss-process=image/resize,m_lfit,h_20,w_20'
      },
      {
        id: 6,
        name: 'INSIDRE',
        desc: 'Handpicked activities just for you',
        loaded: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/Food_Nightlife_Shadow.png',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/Food_Nightlife_Shadow.png?x-oss-process=image/resize,m_lfit,h_20,w_20'
      },
      {
        id: 7,
        name: 'INSIDRE',
        desc: 'Handpicked activities just for you',
        loaded: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/CultureTheme.png',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/CultureTheme.png?x-oss-process=image/resize,m_lfit,h_20,w_20'
      },
      {
        id: 8,
        name: 'INSIDRE',
        desc: 'Handpicked activities just for you',
        loaded: false,
        img_url: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/boats2.png',
        img_url_m: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/boats2.png?x-oss-process=image/resize,m_lfit,h_20,w_20'
      }
    ]
    
  },
  onLoad: function() {
    template.tabbar("tabBar", 0, this);//0表示第一个tabbar

    
  },
  onReady: function () {
    //初始化图片预加载组件，并指定统一的加载完成回调
    this.imgLoader = new ImgLoader(this);
    this.data.categorys.forEach(item => {
      this.imgLoader.load(item.img_url, (err, data) => {
        const imgList = this.data.categorys.map(item => {
          if (item.img_url == data)
            item.loaded = true
          return item
        })
        this.setData({ categorys: imgList })
      })
    })
  }
  
})
