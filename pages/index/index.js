//index.js

Page({
  data:{
    name:"你好",
    counter:0
  },
  changeCounter(event) {
    // console.log(event.currentTarget.id);
    if(event.currentTarget.id === "add") {
      this.setData({
        counter:this.data.counter+1
      })
    }else if(event.currentTarget.id === "sub") {
      this.setData({
        counter:this.data.counter-1
      })
      // console.log(0.1+0.2);
    }else {
      console.log("unkown id");
    }
  }
})
