// components/my-header/my-header.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    trueTitle:{
      type:String,
      value:"default title",
      observer: (newValue,oldValue) => {
        console.log(newValue,oldValue);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    title:"我的钱包",
    count:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    testHello() {
      console.log("hello 你好");
    },
    addCount() {
      this.setData({
        count: this.data.count +1
      });
      this.triggerEvent("increment",{},{})
    }
  },
   
  // 小程序组件的生命周期
  created() {
    console.log("my-header组件被创建成功了");
  },
  attached() {
    console.log("可以用setData渲染节点，但是无法操作节点");
  },
  ready() {
    console.log("可以操作节点");
    console.log(this);
    this.setData({
      title:this.properties.trueTitle
    });
    console.log(this.properties.trueTitle);
    setTimeout(()=> {
      console.log(this.properties.trueTitle);
      this.setData({
        title:this.properties.trueTitle
      });
    },3000);
  },
  moved() {
    console.log("组件实例被移动到树的另一个位置");
  },
  detached() {
    console.log("组件实例从节点树中移除");
  }
})
