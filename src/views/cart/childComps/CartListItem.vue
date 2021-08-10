<template>
  <div class="cart-list-item">
      <div class="item-selector">
        <check-button :isChecked="iteminfo.checked" @click.native="checkClick" />
      </div>
    <div class="item-img">
      <img :src="iteminfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{iteminfo.title.title}}</div>
      <div class="item-desc">{{iteminfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{iteminfo.title.realPrice}}</div>
        <div class="item-count right">x{{iteminfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartListItem",
  components:{
    CheckButton,
  },
  props:{
    iteminfo:{
      type:Object,
      default(){
        return {}
      }
    },
  },
  methods:{
    checkClick(){
      this.iteminfo.checked = !this.iteminfo.checked
    }
  }
}
</script>

<style scoped>
.cart-list-item{
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-top: -1px;
}
.item-selector{
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title , .item-desc{
  overflow: hidden;
  /*文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。*/
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img{
  padding: 5px;
}
.item-img img{
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info{
  font-size: 15px;
  color: #333;
  padding: 5px 10px;
  overflow: hidden;
  position: relative;
}
.item-info .item-desc{
  font-size: 13px;
  color: #666;
  margin-top: 15px;
}
.info-bottom{
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-price{
  color: orangered;
}
</style>
