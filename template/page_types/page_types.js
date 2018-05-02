
//初始化数据
function types() {
  return [
    {
      pic: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/boats2.png',
      title: '玻璃棧道',
      desc: '22W人去過',
      current: false,
      id: 5
    }, {
      pic: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/boats2.png',
      title: '玻璃棧道',
      desc: '22W人去過',
      current: false,
      id: 4
    }, {
      pic: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/boats2.png',
      title: '玻璃棧道',
      desc: '22W人去過',
      current: false,
      id: 3
    }, {
      pic: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/boats2.png',
      title: '玻璃棧道',
      desc: '22W人去過',
      current: false
      ,
      id: 2
    }, {
      pic: 'http://kzbpic.oss-cn-qingdao.aliyuncs.com/kzb_play/demo/boats2.png',
      title: '玻璃棧道',
      desc: '22W人去過',
      current: false,
      id: 1
    }
  ]

}
//types 主入口
function typesMain(bindName = "typeData", id, target, bindData_) {
  var that = target;
  var bindData = {};
  var otype = bindData_;
  var scrollLeft = 0;
  
  otype.find((element,index) => {
    if (element.id == id) {
      otype[index]['current'] = true;
      scrollLeft = (index > 1 ? (index - 1) * (wx.getSystemInfoSync().windowWidth/3):0); 
    }else{
      otype[index]['current'] = false;
    }
  })
  bindData[bindName] = otype
  that.setData({ bindData, scrollLeft});
}

module.exports = {
  typesMain: typesMain
}
