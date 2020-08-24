// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url: {
      type: String,
      value: ''
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
    changeInput(e){
      const value = e.detail.value
      this.triggerEvent('changeInput', {value})
    }
  }
})
