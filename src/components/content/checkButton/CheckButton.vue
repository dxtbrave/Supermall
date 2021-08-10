<template>
 <div class="check-button" :class="{check:isChecked}">
   <img src="~assets/img/cart/tick.svg" alt="">
 </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    isChecked:{
      type:Boolean,
      default(){
        return false
      }
    }
  }
}
</script>

<style scoped>
 .check-button{
   position: relative;
   border-radius: 50%;
   border: 1px solid #aaa;
   width: 18px;
   height: 18px;
   background-color: #fff;
 }
 .check{
   border-color: orangered;
   background-color: orangered;
 }
 .check-button img{
  position: absolute;
   left:2px;
   top: 2px;
   width: 12px;
   height: 12px;
 }
</style>
