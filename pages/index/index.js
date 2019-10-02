//index.js

Page({
  data:{
    name:"你好",
    counter:0,
    provider:[
      {id:'01',name:'广州城投',address:'广州黄埔'},
      {id:'02',name:'广州黄埔科信',address:'广州黄埔'},
      {id:'03',name:'广州蓝亚科技',address:'广州黄埔'},
      {id:'04',name:'广州加勒比数据',address:'广州黄埔'},
      {id:'05',name:'杭州溪塔',address:'杭州'}
    ],
    person: {
      id:1,
      name:"zhangzhang",
      age:101
    }
  },
  changeCounter(event) {
    // console.log(event);
    if(event.target.id === "add") {
      this.setData({
        counter:this.data.counter+1
      })
    } else if (event.target.id === "sub") {
      this.setData({
        counter:this.data.counter-1
      })
      // console.log(0.1+0.2);
    }else {
      console.log("unkown id");
    }
  },
  getInfoMations(event) {
    console.log(event);
  }
})
