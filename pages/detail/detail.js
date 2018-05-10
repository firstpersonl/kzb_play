Page({
  data: {
    imgUrls: [
      'http://pic.kezhanbang.cn:80/28001/index/b37e989e5cd94a3fbbe6fd7dff4318cb.jpg@960w_636h_1c_1e',
      'http://pic.kezhanbang.cn:80/28001/index/9bf2328709c34821a1529f190913d172.jpg@960w_636h_1c_1e',
      'http://pic.kezhanbang.cn:80/28001/index/f16a362581f54d5c9fb38c0ff70d11b8.jpg@960w_636h_1c_1e'
    ],
    phonecall: 13551355464,
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 500,
    markers: [{
      iconPath: "/images/dinwei.png",
      id: 0,
      latitude: 30.5702000000,
      longitude: 104.0647600000,
      width: 40,
      height: 40,
      callout: {
        content: '环球中心E6-1417',
        color: '#000',
        borderRadius: 4,
        padding: 5,
        display: 'ALWAYS',
        textAlign: 'center'
      }
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  phonecallevent: function () {
    wx.makePhoneCall({
      phoneNumber: '18980780016' //仅为示例，并非真实的电话号码
    })
  }
})