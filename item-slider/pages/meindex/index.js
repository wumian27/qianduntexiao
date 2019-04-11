//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    animation: '',
    autoWidth: 0,
    lists: ['制作海报', '每天海报', '纸质名片'],
    index: 0,
    leftMargin: '',
    left:''
  },

  onLoad: function () {
    const info = wx.getSystemInfoSync();
    //计算list项的每一行的宽度
    let left = info.windowWidth / this.data.lists.length;
    let h = 750 / info.windowWidth;
    // 将获取屏幕的高度px转为rpx
    // 将下面的绿色固定宽度居中 150代表绿色的宽度
    let leftMargin = (left*h - 150)/2;

    this.setData({
      autoWidth: h, //响应式布局知道移动的大小
      leftMargin,
      left
    })


  },
  moveTo(e) {
    let current = e.currentTarget.dataset.id;
    const animation = wx.createAnimation({
      timingFunction: 'ease',
      delay: 0,
      duration:300
    });
    // 每次移动一个item的宽度即可
    animation.translateX(current * this.data.left*this.data.autoWidth / this.data.autoWidth).step();
    this.setData({
      animation: animation.export(),
      index: current
    })
  }
})
