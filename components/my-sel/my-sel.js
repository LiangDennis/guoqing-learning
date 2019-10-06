// components/my-sel/my-sel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    counter:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 在页面中获取组件对象，然后通过方法修改counter，而不是直接setData改变data中的值
    incrementCounter(num) {
      this.setData({
        counter : this.data.counter + num
      })
    }
  }
})
