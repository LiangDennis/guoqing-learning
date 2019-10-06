// pages/component/component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wantTitle:"hello world",
    count:11,
    list:["流行","古典","民谣"]
  },
  changeComponents() {
    // console.log(this);
    let mySel = this.selectComponent("#my-sel-id");
    // console.log(mySel);
    mySel.incrementCounter(100);
  },
  handleData(event) {
    console.log(event);
  },
  changeTitle() {
    this.setData({
      wantTitle: "world hello"
    });
  },
  handleIncrement() {
    this.setData({
      count: this.data.count +5
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})