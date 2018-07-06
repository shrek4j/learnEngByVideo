Page({
  onLoad: function(params){
    var that = this;
    var sen = params.sen
    var wds = sen.split(" ")
    that.setData({
      sen:sen,
      wds:wds
    });
  },
  ontap: function(e){
    var wd = e.target.dataset.wd
  }
})