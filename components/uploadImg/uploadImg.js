// components/uploadImg/uploadImg.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tempFilePaths: {
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
    // 删除图片
    delUploadimg(e){
      const id = e.currentTarget.dataset.id
      this.triggerEvent('delUploadimg', {id})
    }
  }
})
