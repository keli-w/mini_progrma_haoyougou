// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 1,
        tab: "体验问题",
        isActive: true,
      },
      {
        id: 2,
        tab: "商品、商家投诉",
        isActive: false
      }
    ],
    problemItem:['功能建议', '购买遇到问题', '性能问题', '其他'],
    tempFilePaths: [],
    textArevalue: ''
  },

  // 改变tab组件的激活状态
  handelItemchange(e){
    const {index} = e.detail
    const {tabs} = this.data
    tabs.map((item, i) => i === index ? item.isActive = true : item.isActive = false)
    this.setData({
      tabs
    })
  },

  // 上传图片的操作
  handelUploadimg(){
    console.log('上传图片')
    var that = this
    wx.chooseImage({
      count: 5,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        that.setData({
          tempFilePaths: [...that.data.tempFilePaths, ...tempFilePaths]
        })
      }
    })
    // this.data.tempFilePaths.forEach(item => {
    //   wx.uploadFile({
    //     filePath: item,
    //     name: 'uploadimg',
    //     url: 'https://images.ac.cn/Home/Index/UploadAction/',
    //     success: (res) => {
    //       console.log(res)
    //     }
    //   })
    // })
  },

  // 删除图片操作
  handeldelUploadimg(e){
    const index = e.detail.id
    const {tempFilePaths} = this.data
    tempFilePaths.splice(index, 1)
    this.setData({
      tempFilePaths
    })
  },

  // 处理文本裕中的内容
  handelTexts(e){
    this.setData({
      textArevalue: e.detail.value
    })
  },

  // 点击提交按钮
  handelSubmit(){
    wx.showLoading({
      title: '提交中...',
    })
    const {textArevalue, tempFilePaths} =this.data
    if (JSON.stringify(tempFilePaths) === '[]'){
      // 只提交文本
      if (!textArevalue){
        wx.showToast({
          title: '请填写你的问题',
        })
        return;
      }
      console.log('只提交文本')
    } else {
      // 提交所有内容
      if (!textArevalue){
        wx.showToast({
          title: '请填写你的问题',
        })
        return;
      }
      console.log('提交所有内容')
    }
    
    wx.hideLoading({
      success: (res) => {
        this.setData({
          tempFilePaths: [],
          textArevalue: ''
        })
        wx.switchTab({
          url: '/pages/user/user',
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})