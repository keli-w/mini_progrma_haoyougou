Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressInfo: {},
    goodsInfoList: [],
    totalPrice: 0,
    totalNum: 0,
    mask: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  // 添加收货地址
  addAdress(){
    console.log('添加收货地址')
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },

  // 获取购物车货物
  getGoods(){
    const cart = wx.getStorageSync('cart') || []
    this.setData({
      goodsInfoList: cart
    })
  },

  // 计算商品总价格和总数量
  setCart(){
    let totalPrice=0
    let totalNum=0
    this.data.goodsInfoList.forEach(item => {
      if (item.goods_checked){
        totalPrice += item.goodsInfo.goods_price * item.goods_num;
        totalNum += item.goods_num
      }
    })
    this.setData({
      totalPrice,
      totalNum
    })
  },

  // 进行支付操作
  handelPay(){
    this.setData({
      mask: true
    })
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
    this.setData({
      addressInfo: getApp().globalData.addressInfo
    })
    this.getGoods(),
    this.setCart()
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