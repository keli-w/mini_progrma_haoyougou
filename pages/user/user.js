// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    collectShops: 0,//收藏的店铺
    collectGoods: 0,//收藏的商品
    followGoods: 0,//关注的商品
    myTrace: 0,//我的足迹
  },

  // 点击收藏的商品，前往收集商品列表页
  gotoCollectUrl(){
    wx.redirectTo({
      url: '/pages/collect/collect',
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
    // 获取缓存的用户信息
    const userInfo = wx.getStorageSync('userInfo')
    const collectGoods = wx.getStorageSync('collectGoods')
    this.setData({
      userInfo,
      collectGoods: collectGoods.length
    })
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