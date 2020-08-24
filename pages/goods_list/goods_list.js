// pages/goods_list/goods_list.js
import {request} from '../../request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 1,
        tab: "综合",
        isActive: true,
      },
      {
        id: 2,
        tab: "销量",
        isActive: false
      },
      {
        id: 3,
        tab: "价格",
        isActive: false
      }
    ],
    queryParams: {
      query: '',
      cid: '',
      pagenum: 1,
      pagesize: 10
    },
    goodsList: []
  },
  total: '',

  // 改变tab组件的激活状态
  handelItemchange(e){
    const {index} = e.detail
    const {tabs} = this.data
    tabs.map((item, i) => i === index ? item.isActive = true : item.isActive = false)
    this.setData({
      tabs
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const cid = options.cid
    this.setData({
      queryParams: {
        ...this.data.queryParams,
        cid
      }
    })
    this.getGoodsList()
  },
  // 获取商品列表数据
  getGoodsList(){
    request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/search', data: this.data.queryParams}).then(result =>{
      if (result){
        wx.stopPullDownRefresh()
      }
      this.setData({
        goodsList: [...this.data.goodsList, ...result.data.message.goods],
        total: result.data.message.total
      })
    })
  },
  OnchangeInput(e){
    this.data.queryParams.query = e.detail
    this.getGoodsList()
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
    this.setData({
      goodsList: []
    })
    this.getGoodsList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const totalPage = this.data.total/this.data.queryParams.pagesize;
    if (this.data.queryParams.pagenum <= totalPage) {
      this.data.queryParams.pagenum++
      this.getGoodsList()
    } else {
      wx.showToast({
        title: '下拉加载完成',
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})