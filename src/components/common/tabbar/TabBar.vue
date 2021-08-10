<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  /*弹性盒子*/
  /*width: 100%;*/
  display: flex;
  /*表示弹性盒子中的排列方式*/
  flex-direction: row;
  background-color: #f6f6f6;
  position: fixed;
  color: black;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, .2);
}
</style>
