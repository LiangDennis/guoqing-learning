// components/my-component-test/my-component-test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    message: {
      type: String,
      value: "中国"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChangeMessage() {
      this.setData({
        message: this.data.message==="中国" ? "广东省" :"中国"
      })
    }
  },

  observers: {
    message(newVal) {
      console.log(newVal);
    }
  },

  //组件本身的生命周期
  created() {
    console.log("组件被创建完成");
  },
  attached() {
    console.log("节点被创建完成");
  },
  ready() {
    console.log("节点渲染完成");
  },
  moved() {
    console.log("组件被移动");
  },
  detached() {
    console.log("组件被销毁");
  },

  // 这种方式的也能够使用
  lifetimes:{
    created() {
      console.log("---------------lifetimes------------------------");
    }
  },

  // 页面中的生命周期
  pageLifetimes:{
    show(){
      console.log("-------------页面渲染完成");
    },
    hide() {
      console.log("-----------------页面被隐藏");
    },
    resize() {        //不常用
      console.log("----------------页面窗口大小发生变化");
    }
  }
})
