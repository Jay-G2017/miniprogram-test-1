Page({
  data: {},
  onLoad: function(options) {
    console.log(options);
    const projectId = options.projectId;
    const that = this;
    const url = "http://34.222.141.3:12600/api/v1/projects/" + projectId;
    wx.request({
      url: url,
      success: function(res) {
        const project = res.data;
        console.log(project);
        that.setData({ projectName: project.name });
      }
    });
  }
});
