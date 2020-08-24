export const request = (params) => {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中...'
    })
    wx.request({
      ...params,
      success(res) {
          resolve(res)
      },
      fail(error) {
        reject(error)
      },
      complete(){
        wx.hideLoading({
          success: (res) => {},
        })
      }
    })
  })
}