<template>
  <div class="profile-head">
    <el-row class="row">
      <el-col class="head" :span="7">
          <div class="header">
            <img src="~assets/img/repare/head.jpg" alt="">
          </div>
      </el-col>
      <el-col :span="17">
        <el-row>
          <el-col class="first-col" :span="24">
            <div>
              <span>李逍遥</span>
              <i class="el-icon-picture-outline-round" />
            </div>
          </el-col>
        </el-row>
        <el-row>
          <div class="second-col">
            <el-col :span="8">
                <span>云享值1339</span>
                <a href="javascript:;"> > </a>
            </el-col>
            <el-col :span="8">
              <span>小云守约</span>
              <a href="javascript:;"> > </a>
            </el-col>
            <el-col :span="8">
              <span>家庭号</span>
              <a href="javascript:;"> > </a>
            </el-col>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ProfileHead"
}
</script>

<style scoped>
.row{
  height: 100%;
}
.head{
  height: 100%;
  position: relative;
}
.head .header{
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -40px;
  margin-top: -40px;
}
.head .header img{
  height: 100%;
  height: 100%;
  border-radius: 50%;
}

.row .first-col{
  height: 50px!important;
  line-height: 50px;
  color: #222;
  font-size: 25px;
  padding-top: 15px;
}
.row .first-col span{
  font-weight: 700;
}
.row .first-col i{
  margin-left: 5px;
}

.row .second-col{
  height: 50px!important;
  line-height: 50px;
  color: #222;
  font-size: 10px;
  text-align: center;
}
</style>
