<template>

  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!IsActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // IsActive: true
    }
  }
  ,
  computed: {
    IsActive(){
      // 通过indexOf的方法，来判断当前路径中是否含有传递的路径
      return this.$route.path.indexOf(this.path)  !== -1;
    },
    activeStyle(){
      return this.IsActive ? {color:this.activeColor} : {} ;
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path != this.path){
        this.$router.replace(this.path);
      }
    }
  },
}
</script>

<style scoped>
.tab-bar-item {
  /*flex:1 表示均匀分布*/
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  margin-top: 3px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>
