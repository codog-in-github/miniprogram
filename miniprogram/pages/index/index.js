//index.js
const app = getApp();
let {globalData} = app;
let data = {
    name:'helloworld!',
};
console.log(globalData);
Page({
   data,
   clickMe(){
       this.setData({name:'I\'m Clicked!'})
   }
})
