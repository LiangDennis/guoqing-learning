// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:["衣服","裤子","鞋子"]
  },
  testCapture() {
    console.log("事件捕获")
  },
  getNewTitle(event) {
    console.log("outer",event);
  },
  getTitle(event) {
    console.log(event);
  },
  handleStart() {
    console.log("touchstart");
  },
  handleEnd() {
    console.log("touchend");
  },
  handleMove() {
    console.log("touchmove");
  },
  handleLongPress() {
    console.log("longpress");
  },
  handleTap() {
    console.log("bindtap");
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