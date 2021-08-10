<template>
  <root-swiper class="swiper-box" :imgurl="imgurl"></root-swiper>
</template>

<script>

import RootSwiper from 'components/common/swiper/Swiper'

export default {
  name: "HomeSwiper",
  components:{
    RootSwiper,
  },
  props:{
    imgurl:Array,
  }
}
</script>

<style scoped>
.swiper-box{
  height: 150px;
  width: 100%;
}
</style>
