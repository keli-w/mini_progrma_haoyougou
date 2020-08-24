// 处理商品的增删减
const handelGoodsItem = (id, mode, goodsList) => {
  const newGoodsInfoList= goodsList.map(item => {
    if(item.goodsInfo.goods_id === id){
      if (mode === -1 && item.goods_num == 1) {
        wx.showModal({
          title: '提示',
          content: '确认删除该商品，不再考虑吗，亲！',
          success: (res) => {
            if (res.confirm){
              goodsList.splice(id, 1)
            }
          }
        })
      } else {
        item.goods_num+=mode
      }
    }
    return item
  })
  return newGoodsInfoList
}


module.exports = {
  handelGoodsItem
}
