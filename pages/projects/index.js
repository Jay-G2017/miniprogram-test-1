//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    projects: [],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo")
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: "../logs/logs"
    });
  },
  onLoad: function() {
    const that = this;
    const url = "http://34.222.141.3:12600/api/v1/categories/1/projects";
    wx.request({
      url: url,
      success(res) {
        console.log(res);
        that.setData({ projects: res.data });
      }
    });
  },
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
});
