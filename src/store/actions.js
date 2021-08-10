export default {
  addCart(context, payload) {
    // let oldProduct = context.state.cartList.find(item=> item.iid === payload.iid)
    // //  2.判断oldProduct
    // if (oldProduct) {
    //   context.commit('addCounter',oldProduct)
    // } else {
    //   payload.count = 1
    //   context.commit('addToCart',payload)
    // }
    return new Promise((resolve,reject)=>{
      let oldProduct = context.state.cartList.find(item=> item.iid === payload.iid)
      //  2.判断oldProduct
      if (oldProduct) {
        context.commit('addCounter',oldProduct)
        resolve('商品数量添加成功!')
      } else {
        payload.count = 1
        context.commit('addToCart',payload)
        resolve('商品添加至购物车成功!')
      }
    })
  }
}
