import Vue from "vue";
import VueRouter from "vue-router";

// 导入组件
const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');

const Detail = () => import('../views/detail/Detail')
// 1.安装插件
Vue.use(VueRouter);

const routes = [
  {
    path:'',
    redirect:'/Home'
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/Cart',
    component: Cart
  },
  {
    path: '/Profile',
    component: Profile
  },
  {
    path:'/Detail/:iid',
    component:Detail
  }
];

// 2.创建router
const router = new VueRouter({
  routes,
  mode:'history'
})


// 3.导出
export default router
