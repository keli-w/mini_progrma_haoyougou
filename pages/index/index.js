// pages/index/index.js
import {request} from '../../request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    navigators: [],
    floordata: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取banner图
    request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'}).then(result => {
    this.setData({
        bannerList: result.data.message
      })
    }),
    // 获取导航栏信息
    request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'}).then(result => {
      this.setData({
        navigators: result.data.message
      })
    }),
    // 获取下层各类商品展示信息
    request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'}).then(result =>{
      this.setData({
        floordata: result.data.message
      })
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