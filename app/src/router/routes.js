import Home from '@/pages/Home/index.vue';
import Search from '@/pages/Search/index.vue';
import Login from '@/pages/Login/index.vue';
import Register from '@/pages/Register/index.vue';
import Details from '@/pages/Details/index.vue';
import AddCartSuccess from '@/pages/AddCartSuccess/index.vue';
import ShopCart from '@/pages/ShopCart/index.vue';
import Trade from '@/pages/Trade/index.vue';
import Pay from '@/pages/Pay/index.vue';
export default [{
    path: "/home",
    component: Home,
    // 路由元信息
    meta: {
      show: true
    }
  },
  {
    path: "/search/:keyword?",
    component: Search,
    meta: {
      show: true
    },
    name: "search",
  },
  {
    path: "/login",
    component: Login,
    meta: {
      show: false
    }
  },
  {
    path: "/register",
    component: Register,
    meta: {
      show: false
    }
  },
  {
    path: "/details",
    component: Details,
    meta: {
      show: true
    },
  },
  // 路由路径小写
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    meta: {
      show: true
    },
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: {
      show: true
    },
  },
  {
    path: "/trade",
    component: Trade,
    meta: {
      show: true
    },
  },
  {
    path: "/pay",
    component: Pay,
    meta: {
      show: true
    },
  },
  {
    path: "/",
    redirect: "/home",
  }
]