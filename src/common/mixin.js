import {debounce} from "@/common/utils";
import BackTop from "components/content/backTop/BackTop";
import {POP,SELL,NEW} from "@/common/const";

export const itemListenerMixin = {
  data(){
    return{
      itemImgListener:null
    }
  },
  mounted(){
    let refresh = debounce(this.$refs.scroll.refresh,500)
    this.itemImgListener = () =>{
      refresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  }
}

export const backTopMixin ={
  components:{
    BackTop,
  },
  data(){
    return{
      isShowBackTop:false
    }
  },
  methods:{
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
  }
}

export const tabControlMixin = {
  data(){
    return{
      currentType:POP
    }
  },
  methods:{
    tabClick(index){
      switch (index){
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType)
    }
  }
}
