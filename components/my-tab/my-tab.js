// components/my-tab/my-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isAcitve:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendData(event) {
      console.log(event);

      let index = event.currentTarget.dataset.index;

      this.triggerEvent("sendData",{
        index,
        item:this.properties.tabList[index]},{})
      this.setData({
        isAcitve : index
      })

      // this.triggerEvent("sendData", { 
      //   index: event.currentTarget.dataset.index, 
      //   item: event.currentTarget.dataset.item},{});

      // console.log(event.currentTarget.dataset.index);
      // this.setData({
      //   isAcitve : event.currentTarget.dataset.index
      // })
    }
  }
})
