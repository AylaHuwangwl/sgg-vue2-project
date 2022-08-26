import Home from '@/pages/Home/index.vue';
import Search from '@/pages/Search/index.vue';
import Login from '@/pages/Login/index.vue';
import Register from '@/pages/Register/index.vue';
import Details from '@/pages/Details/index.vue';
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
  {
    path: "/",
    redirect: "/home",
  }
]