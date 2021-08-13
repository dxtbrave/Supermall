<template>
<div class="profile">
  <nav-bar class="profile-bar">
    <div slot="center">我的档案</div>
  </nav-bar>
  <scroll class="content">
    <profile-head class="my-head"></profile-head>
  </scroll>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import ProfileHead from "views/profile/childComps/ProfileHead";
export default {
  name: "Profile",
  components:{
    NavBar,
    Scroll,
    ProfileHead,
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
</style>
