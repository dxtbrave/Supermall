<template>
  <div class="card-three">
    <el-card class="card-3" :body-style="	{ padding: '0px' }">

    </el-card>
  </div>
</template>

<script>

import GoodsList from "components/content/goods/GoodsList";

import {getHomeGoods} from "@/network/home";

export default {
  name: "CardThree",
  components:{
    GoodsList,
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
    //请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // push方法可以利用push(...数组)的方式添加新数组
        // 还可以利用for in循环
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        // this.$refs.scroll.finishPullUp()
      });
    },
  },
  created() {

  }
}
</script>

<style scoped>
.card-three .card-3{
  padding: 10px 3px;
  height: 100%;
  border-radius: 15px;
  margin: 0 10px;
}
</style>
