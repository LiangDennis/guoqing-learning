// pages/toast/toast.js
Page({
  handleshowToast() {
    wx.showToast({
      title: 'hello world',
      // icon: 'loading',

      duration: 2000,
      mask:true,
      success:(res)=> {
        console.log(res);
      },
    });
  },
  handleshowModal() {
    wx.showModal({
      title: '你确定退出吗？',
      content: '请选择',
      // showCancel: false,
      cancelText: "hello",
      cancelColor: "blue",
      confirmText: "你好",
      confirmColor: "red",
      success: (res)=> {
        console.log(res);
      }
    })
  },
  handleshowLoading() {
    wx.showLoading({
      title: '请等待...',
      mask: true
    });

    // loading必须通过下面函数来取消。
    setTimeout(()=> {
      wx.hideLoading()
    },2000)
  },
  handleshowActionSheet() {
    wx.showActionSheet({
      itemList: ['分享','发送','收藏','保存'],
      itemColor: '#ace',
      success: (res)=> {
        console.log(res);
      }
    })
  }
})