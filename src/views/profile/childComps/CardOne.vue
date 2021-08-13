<template>
<div>
  <el-card class="card" :body-style="{ padding: '0px' }">
    <el-row class="row" :gutter="10">
      <el-col class="col" v-for="(item,index) in message_one" :span="24/message_one.length">
        <div class="content">
          <div class="first">
            <i class="icon" :class="icon_one[index]" />
            <span>{{item}}</span>
          </div>
          <div class="second">
            <a href="javascript">{{message_two[index]}}</a>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-card>
</div>
</template>

<script>
export default {
  name: "CardOne",
  data(){
    return{
      message_one:['PLUS会员','PLUS会员店','1元疯抢'],
      icon_one:['el-icon-s-platform','el-icon-s-home','el-icon-s-opportunity'],
      message_two:['购物返金豆','专属好物低价','百件商品任选']
    }
  },
  mounted() {
    const col = document.getElementsByClassName('col')
    for(let i=0;i<this.message_one.length;i++){
      col[i].classList.add('right-border')
    }
  }
}
</script>

<style scoped>
.card{
  padding: 10px 3px;
  height: 100%;
  margin: 0px 10px;
  border-radius: 15px;
  background-image: linear-gradient(90deg,rgba(255,215,0,.6) 0,rgba(255,255,0,.4) 50%,rgba(255,215,0,.6));
}
.row{
  text-align: center;
  color: rgba(0,128,0,.9);
}
.row .content{
  margin: 10px 0;
}
.row .content .first{
  font-size: 14px;
}
.row .content .first .icon{
 color: #ff4500;
}
.row .content .first>span{
  margin-left: 3px;
}
.row .content .second {
  margin-top: 10px;
  font-size: 12px;
}
.row .content .second>a{
  color: rgba(50,205,50,.7);
}

.right-border{
  border-right: 1px solid rgba(175,238,238,.3);
}
</style>
