// pages/category/category.js
import {request} from '../../request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList: [],
    rightContet: [],
    currentIndex: 0,
    scrollTop: 0
  },
  datas: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (JSON.stringify(this.datas) == '[]'){
      this.getDatas()
    }
  },
  // 获取请求数据
  getDatas(){
    request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories'}).then(result => {
      this.datas = result.data.message;
      wx.setStorage({
        data: this.datas,
        key: 'dataInfo',
      })
      const leftMenuList = this.datas.map(item => item.cat_name);
      const rightContet = this.datas.map(item => item.children[0])
      this.setData({
        leftMenuList,
        rightContet
      })
    })
  },
  changeMenu: function (e) {
    const {index} = e.currentTarget.dataset
    const rightContet = this.datas.map(item => item.children[index])
    this.setData({
      currentIndex: index,
      rightContet,
      scrollTop: 0
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