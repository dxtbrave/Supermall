<template>
<div class="detail-swiper">
  <swiper class="swiperbox" :options="swiperOptions">
    <swiper-slide v-for="(item,index) in topImages" :key="index">
      <img :src="item" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: "DetailSwiper",
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      swiperOptions:{
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 3000,
        initialSlide :1,
      }
    }
  }
}
</script>

<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}

.swiperbox img{
  width: 100%;
  height: 100%;
}
.swiper-pagination{
  position: absolute;
  top: 275px;
}
</style>
