
//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/pages/index/index",
      "iconPath": "/images/category.png",
      "selectedIconPath": "/images/category_c.png",
      "text": "发现"
    },
    // {
    //   "current": 0,
    //   "pagePath": "/pages/address/address",
    //   "iconPath": "/images/address.png",
    //   "selectedIconPath": "/images/address_c.png",
    //   "text": "地方"

    // },
    {
      "current": 0,
      "pagePath": "/pages/favoter/favoter",
      "iconPath": "/images/favoter.png",
      "selectedIconPath": "/images/favoter_c.png",
      "text": "收藏"
    },
    {
      "current": 0,
      "pagePath": "/pages/user/user",
      "iconPath": "/images/user.png",
      "selectedIconPath": "/images/user_c.png",
      "text": "我的"
    }
  ]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}

module.exports = {
  tabbar: tabbarmain
}