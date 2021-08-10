<template>
  <div id="detail">
    <detail-navbar ref="nav" class="detail-nav" @titleClick="titleClick"/>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :paramInfo="paramInfo"/>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backClick"/>
    <detail-bottom-bar @addCart="addToCart" />
  </div>
</template>

<script>

import DetailNavbar from "views/detail/childComps/DetailNavbar";
import DetailSwiper from "views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "views/detail/childComps/DetailCommentInfo";
import GoodsList from "components/content/goods/GoodsList";
import DetailBottomBar from "views/detail/childComps/DetailBottomBar";


import Scroll from "components/common/scroll/Scroll";

// 导入网络请求文件
import {getDetail,getRecommend, Goods , Shop , GoodsParam} from "@/network/detail";

import {itemListenerMixin ,backTopMixin} from "@/common/mixin";
import {debounce} from "@/common/utils";


export default {
  name: "Detail",
  components: {
    DetailBaseInfo,
    DetailNavbar,
    DetailSwiper,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Scroll,
  },
  mixins:[itemListenerMixin,backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTops:[],
      getThemeTop:null,
      currentIndex:0,

      message:'',
      show:false,
    }
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求数据
    getDetail(this.iid).then(res => {
      // console.log(res)
      const data = res.result
      console.log(data)
      // 1.获取顶部的图片轮播数据
      this.topImages = res.result.itemInfo.topImages

      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      // 3.创建店铺信息对象
      this.shop = new Shop(data.shopInfo)

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo

      // 5.获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      // 6.取出评论信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
    })
      // 3.请求推荐数据
    getRecommend().then(res=>{
      this.recommends = res.data.list
    })

    // 防抖操作
    this.getThemeTop = debounce(()=>{
      this.themeTops.push(0)
      this.themeTops.push(this.$refs.params.$el.offsetTop)
      this.themeTops.push(this.$refs.comment.$el.offsetTop)
      this.themeTops.push(this.$refs.recommend.$el.offsetTop)
      this.themeTops.push(Number.MAX_VALUE)
    },500)

  },
  mounted() {
  },
  updated() {

  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
      this.getThemeTop()
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTops[index],1000)
    },
    contentScroll(position){
      // 1.获取y值
      let positionY = - position.y
      let length = this.themeTops.length
      // 2.positionY和主题中值进行对比
      for(let i = 0 ;i<length-1 ; i++){
        // if (this.currentIndex !== i &&((i < length - 1 && positionY >= this.themeTops[i] &&
        //   positionY < this.themeTops[i+1])
        //   || (i === length -1 && positionY >= this.themeTops[i]))){
        //   this.currentIndex = i
        //   this.$refs.nav.currentIndex = this.currentIndex
        // }
        if(this.currentIndex !== i &&(positionY >= this.themeTops[i] && positionY <
        this.themeTops[i+1])){
          this.currentIndex = i ;
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      this.isShowBackTop = positionY > 1000 ? true : false
    },
    addToCart(){
      //  1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods
      product.desc = this.goods.desc
      product.price = this.goods.newPrice
      product.iid = this.iid

     //  2.将商品添加至购物车
     //  this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product).then(res=>{
        this.$toast.BeginShow(res,1500)
        console.log(this.$toast)
      })
    }
  },
  destroyed() {
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.detail-nav{
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
}
.content{
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 58px;
}
</style>
