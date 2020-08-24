// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressInfo: {},
    goodsInfoList: [],
    checkedAll: false,
    totalPrice: 0,
    totalNum: 0
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
    // 全选全不选
    const checkedAll = cart.length > 0 && cart.every(item => item.goods_checked === true)
    this.setData({
      goodsInfoList: cart,
      checkedAll
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

  // 处理商品的增减
  handelcutAndadd(e){
    const id = e.currentTarget.dataset.id
    const mode = e.currentTarget.dataset.mode
    const {goodsInfoList} = this.data
    const index = goodsInfoList.findIndex(item => item.goodsInfo.goods_id === id)
    if(mode == -1 && goodsInfoList[index].goods_num == 1) {
      wx.showModal({
        title: '提示',
        content: '确认删除该商品，不再考虑吗，亲！',
        success: (res) => {
          if (res.confirm){
            goodsInfoList.splice(index, 1)
            this.setData({
              goodsInfoList
            })
          }
        }
      })
    } else {
      goodsInfoList[index].goods_num += mode
      this.setData({
        goodsInfoList
      })
    }
    wx.setStorage({
      data: this.data.goodsInfoList,
      key: 'cart',
    })
    this.setCart()
  },

  // 单个商品的反选
  checkChange(e){
    const id = e.currentTarget.dataset.id
    const newGoodsInfoList = this.data.goodsInfoList
    const index = newGoodsInfoList.findIndex(item => item.goodsInfo.goods_id === id)
    console.log(index)
    newGoodsInfoList[index].goods_checked = !newGoodsInfoList[index].goods_checked
    const checkedAll = newGoodsInfoList.length > 0 && newGoodsInfoList.every(item => item.goods_checked === true)
    this.setData({
      checkedAll,
      goodsInfoList: newGoodsInfoList
    })
    wx.setStorage({
      data: this.data.goodsInfoList,
      key: 'cart',
    })
    this.setCart()
  },
  
  // 全不选
  checkAll(){
    const newGoodsInfoList = this.data.goodsInfoList.map(item => {
      return {...item, goods_checked: !this.data.checkedAll}
    })
    this.setData({
      checkedAll: !this.data.checkedAll,
      goodsInfoList: newGoodsInfoList
    }),
    wx.setStorage({
      data: this.data.goodsInfoList,
      key: 'cart',
    })
    this.setCart()
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