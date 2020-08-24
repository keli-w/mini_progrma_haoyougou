// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
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
    changeTab(e){
      const {index} = e.currentTarget.dataset
      const {tabs} = this.data
      tabs.map((item, i) => i === index ? item.isActive = true : item.isActive = false)
      this.setData({
        tabs
      })
    }
  }
})
