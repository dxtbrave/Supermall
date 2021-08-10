<template>
  <swiper class="swiperbox" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item,index) in imgurl" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageload">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "RootSwiper",
  props: {
    imgurl: Array,
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction:false,
        initialSlide :1,
      },
      isLoad: false
    }
  },
  methods:{
    imageload(){
      if (!this.isLoad){
        this.$bus.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }

}
</script>

<style scoped>
.swiperbox {
  width: 100%;
  height: 100%;
}

.swiperbox img {
  width: 100%;
  height: 100%;
}
</style>
