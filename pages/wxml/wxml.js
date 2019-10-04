// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score:70,
    youxiu: "优秀",
    jige: "及格",
    provinces:["广东省","广西省","云南省","湖南省","福建省"]
  },
  addSeven() {
    if(this.data.score+7 > 100) {
      console.log("非法操作");
      return false;
    }
    this.setData({
      score: this.data.score + 7
    });
  },
  subSeven() {
    if(this.data.score-7 < 0) {
      console.log("非法操作");
      return false;
    }
    this.setData({
      score: this.data.score -7
    })
  },
  testBindTap() {
    console.log("模板的按钮点击事件");
  },
})