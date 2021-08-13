<template>
  <div>
    <el-card class="card" :body-style="{ padding: '0px' }">
      <el-row class="header" :gutter="8" slot="header">
        <el-col class="header-col" v-for="(item,index) in header_icon" :span="24 / header_icon.length">
          <a href="javascript:;">
            <i :class="item" />
            <span>{{header_message[index]}}</span>
          </a>
        </el-col>
      </el-row>
      <el-row style="padding: 0">
        <div class="content">
          <el-col v-for="(item,index) in body_icon" :span="24/body_icon.length">
            <a class="body-content" href="javascript:;">
              <div class="icon">
                <i :class="item" />
              </div>
              <span>{{body_message[index]}}</span>
            </a>
          </el-col>
        </div>
      </el-row>
    </el-card>
  </div>

</template>

<script>
export default {
  name: "CardTwo",
  data(){
    return{
      header_icon:['el-icon-star-off','el-icon-s-cooperation','el-icon-time'],
      header_message:['商品收藏10','店铺关注6','浏览记录21'],
      body_icon:['el-icon-wallet','el-icon-suitcase','el-icon-chat-dot-round','el-icon-bangzhu','el-icon-tickets'],
      body_message:['待付款','待收货','待评价','退换/售后','我的订单'],
    }
  },
  mounted() {
    const header = document.getElementsByClassName('header-col')
    for (let i = 0 ; i<this.header_icon.length ; i++){
      header[i].classList.add('right-border')
    }
  }
}
</script>

<style scoped>
.card{
  height: 100%;
  margin: 0px 10px;
  border-radius: 15px;
}
.header{
  font-size: 12px;
  text-align: center;
}
.content{
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
}
.content .body-content{
  display: inline-block;
  width: 70px;
}
.content .body-content .icon{
  font-size: 25px;
}




.right-border{
  border-right: 1px solid rgba(175,238,238,.3);
}

</style>
