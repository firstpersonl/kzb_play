const app = getApp();
Page({
  data: {
    imgUrls: [],
    phonecall: 13551355464,
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 500,
    partyId: null,
    party: {}
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
      phoneNumber: this.data.party.phone //仅为示例，并非真实的电话号码
    })
  },
  onLoad: function(options) {
    console.log(1)
    this.setData({
      partyId: options.partyId
    })
  },
  onReady: function() {
    console.log(2)
    const that = this;
    wx.request({
      url: app.globalData.BASE_PATH + '/mini_data/party/findOneById.htm',
      data: {
        partyId: that.data.partyId
      },
      success: function (res) {
        var detail = res.data;
        var markers = [{
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
        }];
        markers[0].latitude = detail.latitude;
        markers[0].longitude = detail.longitude;
        markers[0].callout.content = detail.locationText;
        detail.markers = markers;
        that.setData({
          party: detail
        });
        wx.request({
          url: app.globalData.BASE_PATH + '/mini_data/party/load_partyCovers.htm',
          data: {
            partyId: that.data.partyId
          },
          success: function(res){
            const imgUrls = [];
            res.data.forEach(item => {
              imgUrls.push(item.src);
            })
            // party.ossImage = res.data;
            that.setData({
              imgUrls: imgUrls
            });

          }
        })
      }
    })
  }

})