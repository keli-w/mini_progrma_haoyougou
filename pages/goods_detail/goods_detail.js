// pages/goods_detail/goods_detail.js
import {request} from '../../request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDatailInfo: {},
    isCollect: false, //表示该商品是否被收藏
  },

  // 点击进行商品收藏
  handelCollect(e){
    const cart = e.currentTarget.dataset.goodsinfo
    const collectGoods = wx.getStorageSync('collectGoods') || []
    const index = collectGoods.findIndex(item => item.goods_id === cart.goods_id)
    const {isCollect} = this.data
    if (!isCollect){
      this.setData({
        isCollect: true
      })
      collectGoods.push(cart) 
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        mask: true
      })
    } else {
      this.setData({
        isCollect: false
      })
      collectGoods.splice(index, 1)
      wx.showToast({
        title: '取消成功',
        icon: 'success',
        mask: true
      })
    }
    wx.setStorageSync('collectGoods', collectGoods)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getgoodsDetail(options.goods_id)
  },
  // 获取商品详情信息
  getgoodsDetail(id){
    request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail', data: {goods_id: id}}).then(result => {
      const res = result.data.message
      const collectGoods = wx.getStorageSync('collectGoods') || []
      const isCollect = collectGoods.some(item => item.goods_id === res.goods_id)
      this.setData({
        goodsDatailInfo: {
          pics: res.pics,
          goods_introduce: res.goods_introduce,
          goods_name: res.goods_name,
          goods_price: res.goods_price,
          goods_id: res.goods_id
        },
        isCollect
      })
    })
  },

  // 加入购物车
  addCart(){
    console.log('加入购物车')
    const cart = wx.getStorageSync('cart')||[]
    console.log(cart)
    const index = cart.findIndex(item => item.id === this.data.goodsDatailInfo.goods_id)
    if (index <= -1) {
      cart.push({
        goodsInfo: this.data.goodsDatailInfo,
        goods_num: 1,
        goods_checked: true
      })
    }else{
      cart[index].goods_num++
    }
    wx.setStorageSync('cart', cart)
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      mask: true
    })
  },

  // 立即购买
  buy(){
    console.log('立即购买')
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