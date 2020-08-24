// pages/search/search.js
import {request} from '../../request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList: []
  },

  // 关键字搜索
  handelInputchange(e){
    const value = e.detail.value
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      console.log(value)
      this.queryGoods(value)
    }, 1000);
  },

  // 搜索查询请求
  queryGoods(query){
    request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/qsearch', data: {query}}).then(result => {
      console.log(result)
      this.setData({
        searchList: result.data.message
      })
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