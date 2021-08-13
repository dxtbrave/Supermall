<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">云天购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      class="tab-control"
      ref="tabControl1"
      v-show="isTabFixed"
    />
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <home-swiper :imgurl="banners"/>
      <home-recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"/>

  </div>
</template>

<script>
//导入公共组件
//导入头部导航栏
import NavBar from "components/common/navbar/NavBar";
//导入分类栏
import TabControl from "components/content/tabControl/TabControl";
import {getHomeMultidata, getHomeGoods} from "network/home";
import BScroll from "better-scroll";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

//导入swiper组件   轮播图
import HomeSwiper from "views/home/childComps/HomeSwiper";
//导入recommend组件 推荐
import HomeRecommendView from "views/home/childComps/HomeRecommendView";
//导入FeatureView组件 本周流行
import FeatureView from "views/home/childComps/FeatureView";

// 引入混入对象
import {itemListenerMixin} from "@/common/mixin";
export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
  },
  mixins:[itemListenerMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []},
      },
      currentType: "pop",
      isShowBackTop: false,
      isTabFixed:false,
      tabOffsetTop:0,
      saveY:0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

  },
  mounted() {
    // 3.监听item图片加载完成
    // this.$bus.$on('itemImageLoad', () => {
    //   this.$refs.scroll.refresh();
    // })
    // const refresh = this.debounce(this.$refs.scroll.refresh, 500)
    //
    // this.itemImgListener = () =>{
    //   refresh()
    // }
    // this.$bus.$on('itemImageLoad',this.itemImgListener)
    // this.$bus.$on('itemImageLoad',()=>{
    //   refresh()
    // })

    // 监听Swiper加载是否完成
    this.$bus.$on('swiperImageLoad',()=>{
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    })
    // 获取tabControl的offsetTop
    // 所有的组件啊都有一个属性 $el:用于获取组件中的元素
    // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    // console.log(this.tabOffsetTop)
  },
  destroyed() {

  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated() {
    // 1.保存y值
    this.saveY = this.$refs.scroll.getScrollY();

    // 2.取消全局事件的监听
    // this.itemImgListener 是一个函数
    this.$bus.$off('itemImageload',this.itemImgListener)
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    // 防抖动
    debounce(func, delay) {
      let timer = null
      return function (...args) {
        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000 ? true : false;

      // 2.决定tabControl是否吸顶(position:fiexd)
      this.isTabFixed = -position.y > this.tabOffsetTop ? true : false;
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },

    /**
     * 网络请求相关的方法
     * */
    // 请求轮播图数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // push方法可以利用push(...数组)的方式添加新数组
        // 还可以利用for in循环
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        this.$refs.scroll.finishPullUp()
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control{
  position: relative;
  top: -1px;
  z-index: 1;
  /*background-color: ;*/
}
</style>
