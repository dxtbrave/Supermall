<template>
  <!--  <div class="bottom-bar">-->
  <!--    <div class="check-content">-->
  <!--      <check-button class="check-button"-->
  <!--                    :is-checked="isSelectAll"-->
  <!--                    @click.native="checkClick"/>-->
  <!--      <span>全选</span>-->
  <!--    </div>-->

  <!--    <div class="price">-->
  <!--      <span>合计：{{ totalPrice }}</span>-->
  <!--    </div>-->

  <!--    <div class="caculate" @click="caculateClick">-->
  <!--      <span>结算({{ checkLength }})</span>-->
  <!--    </div>-->
  <!--  </div>-->
  <div class="bottom-menu">
    <div @click="checkClick">
      <check-button class="select-all"
                    :is-checked="isSelectAll"/>
      <span>全选</span>
    </div>
<!--    <check-button class="select-all"-->
<!--                  :is-checked="isSelectAll"-->
<!--                  @click.native="checkClick"/>-->
<!--    <span>全选</span>-->
    <span class="total-price">合计：{{ totalPrice }}</span>
    <span class="buy-product" @click="caculateClick">结算({{ checkLength }})</span>
  </div>

</template>

<script>

import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return '￥' + this.$store.getters.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        {
          preValue += Number(item.title.realPrice) * item.count
          // return Number(item.title.realPrice) * item.count
          return preValue
        }
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).length
    },
    isSelectAll() {
      if (this.$store.getters.cartList.length === 0) {
        return false
      }
      return !this.$store.getters.cartList.find(item => !item.checked)
    },
  },
  methods: {
    checkClick() {
      // 第一种情况，全部选中
      if (this.isSelectAll) {
        this.$store.getters.cartList.forEach(item => item.checked = false)
      }
      // 第二种情况，全部不选中
      else {
        this.$store.getters.cartList.forEach(item => item.checked = true)
      }
      // this.$store.getters.cartList.forEach(item => item.checked = true)
    },
    caculateClick() {
      if (!this.isSelectAll) {
        this.$toast.BeginShow('请选择商品', 1500)
      }
    }
  }
}
</script>

<style scoped>
/*.bottom-bar {*/
/*  position: relative;*/
/*  bottom: 50px;*/

/*  display: flex;*/

/*  width: 100%;*/
/*  background-color: #eee;*/
/*  height: 40px;*/
/*  font-size: 10px;*/
/*}*/

/*.check-content {*/
/*  display: flex;*/
/*  align-items: center;*/
/*  margin-left: 10px;*/
/*  width: 60px;*/
/*}*/

/*.check-button {*/
/*  !*width: 20px;*!*/
/*  !*height: 20px;*!*/
/*  margin-right: 5px;*/
/*}*/

/*.price {*/
/*  flex: 1;*/
/*  line-height: 40px;*/
/*}*/

/*.price span {*/
/*  float: right;*/
/*  padding-right: 20px;*/
/*}*/

/*.caculate {*/
/*  margin: 5px 5px 5px 0;*/
/*  width: 75px;*/
/*  background-color: orangered;*/
/*  text-align: center;*/
/*  border-radius: 25px;*/
/*}*/

/*.caculate span {*/
/*  color: #fff;*/
/*  line-height: 30px;*/
/*}*/
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  font-size: 13px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
  display: flex;
}

.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 13px;
  color: #666;
  flex: 1;
}

.bottom-menu .buy-product {
  background-color: orangered;
  color: #fff;
  width: 75px;
  text-align: center;
  line-height: 34px;
  border-radius: 25px;
  margin: 5px 5px 5px 0;
}
</style>
