<template>
<div class="profile">
  <nav-bar class="profile-bar">
    <div slot="center">我的档案</div>
  </nav-bar>

  <scroll ref="scroll"
          class="content"
          :probe-type="3"
          :pull-up-load="true"
          @scroll="contentScroll"
          @pullingUp="loadMore">
    <profile-head class="my-head"></profile-head>
    <card-one class="card-one"/>
    <card-two class="card-two" />
    <div class="card-three">
      <el-card class="card-3" :body-style="	{ padding: '0px' }">
        <goods-list :goods="showGoods"/>
      </el-card>
    </div>

  </scroll>

  <back-top @click.native="backClick" v-show="isShowBackTop"/>

</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import ProfileHead from "views/profile/childComps/ProfileHead";
import CardOne from "views/profile/childComps/CardOne";
import CardTwo from "views/profile/childComps/CardTwo";
import CardThree from "views/profile/childComps/CardThree";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import {getHomeGoods} from "@/network/home";

export default {
  name: "Profile",
  components:{
    NavBar,
    Scroll,
    ProfileHead,
    CardOne,
    CardTwo,
    CardThree,
    GoodsList,
    BackTop,
  },
  data() {
    return {
      goods: {
        pop: {page: 0, list: []},
      },
      currentType: "pop",
      isShowBackTop: false,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },

    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000 ? true : false;
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
  created() {
    this.getHomeGoods(this.currentType)
  }
}
</script>

<style scoped>
.profile-bar{
  background-color: var(--color-tint);
  color: #f2f5f8;
  font-weight: 700;
}
.content{
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
.my-head{
  margin-bottom: 10px;
  height: 100px;
}

.card-one{
  height: 80px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.card-two{
  height: 140px;
  margin-bottom: 10px;
}
.card-three .card-3{
  padding: 10px 3px;
  height: 100%;
  border-radius: 15px;
  margin: 0 10px;
}
</style>
