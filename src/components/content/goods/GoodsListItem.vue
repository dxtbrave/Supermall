<template>
  <div class="goods-item" @click="itemClick">
    <!--    <img :src="showImage" alt="" @load="imageload">-->
    <img v-lazy="showImage" alt="" @load="imageload">
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    }
    // showImage() {
    //   return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    // }
  },
  methods: {
    imageload() {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      this.$router.push('/Detail/' + this.goodsItem.iid)
      // const iid = this.goodsItem.iid
      // this.$router.push({path:'/Detail',query:{iid}})
    }
  }
}
</script>

<style scoped>
.goods-item {
  position: relative;
  width: 46%;
  padding-bottom: 40px;
}

.goods-item img {
  width: 100%;
  border-radius: 10px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  right: 0;
  left: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
