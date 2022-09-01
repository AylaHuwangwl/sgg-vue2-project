import Home from '@/pages/Home/index.vue';
import Search from '@/pages/Search/index.vue';
import Login from '@/pages/Login/index.vue';
import Register from '@/pages/Register/index.vue';
import Details from '@/pages/Details/index.vue';
import AddCartSuccess from '@/pages/AddCartSuccess/index.vue';
import ShopCart from '@/pages/ShopCart/index.vue';
import Trade from '@/pages/Trade/index.vue';
import Pay from '@/pages/Pay/index.vue';
import PaySuccess from '@/pages/PaySuccess/index.vue';
import Center from '@/pages/Center/index.vue';
import MyOrder from '@/pages/Center/myOrder/index.vue'
import GroupBuy from '@/pages/Center/groupOrder'
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
     /* 只能从购物车界面, 才能跳转到交易界面 */
     beforeEnter (to, from, next) {
      if (from.path==='/shopcart') {
        next()
      } else {
        next('/shopcart')
      }
    }
  },
  {
    path: "/pay",
    component: Pay,
    meta: {
      show: true
    },
    beforeEnter(tp,from,next){
      if(from.path == '/trade'){
        next();
      }else{
        next('/trade');
      }
    },
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: {
      show: true
    },
    beforeEnter (to, from, next) {
      if (from.path==='/pay') {
        next()
      } else {
        next('/pay')
      }
    }
  },
  {
    path: "/center",
    component: Center,
    meta: {
      show: true
    },
    children:[
      {
        // path: '/center/myorder',
        path: 'myorder',
        component: MyOrder,
      },
      {
        path: 'groupbuy',
        component: GroupBuy,
      },

      {
        path: '',
        redirect: 'myorder'
      }
    ]
  },
  {
    path: "/",
    redirect: "/home",
  }
]