<template>
  <div class="goods">
  <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem";
export default {
  name: "GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem,
  }
}
</script>

<style scoped>
.goods{
  display: flex;
  /*默认情况下是不包裹：都往一行塞*/
  /*设置wrap就是包裹：根据实际情况在一行显示响应的数量*/
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
