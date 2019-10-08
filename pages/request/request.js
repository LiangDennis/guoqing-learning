// pages/request/request.js

import request from '../../utils/request.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url: "/account/login",
      method: "post",
      data:{
        username:"test0804",
        password:"12345678"
      }
    }).then((res) => {
      console.log(res);
    }).catch(err=> {
      console.log(err);
    })
  },
  getData() {
    wx.request({
      url: '/account/login',
      method: 'post',
      data: {
        username: "test0804",
        password: "12345678"
      },
      // 成功时回调
      success: (res) => {
        console.log(res);
      },
      // 失败时回调
      fail: (err) => {
        console.log(err);
      },
      // 无论成功失败都执行，可以直接在此处判断数据是否有吗
      complete: (response) => {
        console.log(response);
      }
    })
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