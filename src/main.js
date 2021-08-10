import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";

import toast from "components/common/toast"


// 导入插件swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import FastClick from "fastclick"
//图片懒加载
import VueLazyload from "vue-lazyload";

Vue.prototype.$bus = new Vue();

Vue.use(VueAwesomeSwiper)
Vue.use(toast)
Vue.use(VueLazyload,{

})

// 解决移动端300ms延迟
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
