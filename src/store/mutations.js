export default {
  // mutations唯一的目的就是修改state中状态
  // mutations设计原则：每一个方法尽可能完成的事情比较单一
  addCounter(state,payload){
    payload.count += 1
  },
  addToCart(state,payload){
    payload.checked = true
    state.cartList.push(payload)
  }
}
