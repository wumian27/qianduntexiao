// components/title-tab-item/title-tab-item.js

  


  
Page({
  data: {
    animationMark: {},
    titles: ['制作海报', '每天海报', '纸质名片']
  },

    setCurrentTabItem(index){
      const current = index;
      if (this.data.current === current) {
        return;
      }
      this.animationMark = wx.createAnimation({
        duration: 0,
        timingFunction: 'ease',
      })
      const info = wx.getSystemInfoSync()
      const value = 750 / this.data.titles.length;
      const offX = (value * info.windowWidth / 750) / 2;
      let count = current * 2;

      console.log('偏移单位：' + offX);
      console.log('偏移倍数：' + count);
      console.log('偏移量：' + (offX * count));
      this.animationMark.translateX(offX * count).step({
        duration: 300
      }),
        this.setData({
          animationMark: this.animationMark.export(),
          current,
        });

    },

    onTitleTabItemClick(e) {
      console.log(e);
      const current = e.currentTarget.dataset.id;
      this.setCurrentTabItem(current);
    }


  
})