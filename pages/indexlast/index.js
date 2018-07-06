//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  onLoad: function () {
    wx.playBackgroundAudio({
      dataUrl: 'http://m10.music.126.net/20180417160238/368d7a46b0bfe9bbec71165d4cf33698/ymusic/7245/c7bb/b078/81c1e81d3b5fed50ca6d51196fc59ad6.mp3',
      title: '',
      coverImgUrl: ''
    })
  }
})
