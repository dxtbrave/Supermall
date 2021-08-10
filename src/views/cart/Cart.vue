<template>
<div class="cart">
<!-- 导航 -->
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>
<!-- 商品的列表 -->
  <scroll class="content" ref="scroll" :probeType="3">
    <CartList/>
  </scroll>

<!-- 底部的汇总 -->
  <cart-bottom-bar/>
</div>
</template>

<script>

import Scroll from "components/common/scroll/Scroll";

import NavBar from "components/common/navbar/NavBar";
import CartList from "views/cart/childComps/CartList";
import CartBottomBar from "views/cart/childComps/CartBottomBar";

import {mapGetters} from "vuex"

export default {
  name: "Cart",
  components:{
    Scroll,
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed:{
    ...mapGetters([
      'cartLength',
    ])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cart{
  position: relative;
  /*height: 100vh;*/
  /*height: 100vh;*/
}
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}
.content{
  position: fixed;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 88px;
  /*height: calc(100% - 44px - 80px);*/
  /*overflow: hidden;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 44px;*/
  /*bottom: 80px;*/
}

</style>
