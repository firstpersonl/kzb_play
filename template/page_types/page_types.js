
//初始化数据
function types() {
  return []

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
