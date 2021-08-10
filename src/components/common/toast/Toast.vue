<template>
  <div class="toast" v-show="isShow" >
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  // props: {
  //   message: {
  //     type: String,
  //     default() {
  //       return ' '
  //     }
  //   },
  //   show: {
  //     type: Boolean,
  //     default() {
  //       return false;
  //     }
  //   }
  // },
  data(){
    return{
      message:'',
      isShow:false
    }
  },
  methods:{
    BeginShow(message,duration=2000){
      this.isShow = true
      this.message = message
      setTimeout(()=>{
        this.isShow = false
        this.message = ''
      },duration)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, .6);
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 12px;
  border-radius: 25px;
  z-index: 99;
}
</style>
