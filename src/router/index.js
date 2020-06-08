import Vue from 'vue'
import Router from 'vue-router';
import Home from "../pages/home/Home"
import Market from "../pages/market/Market";
import Trade from "../pages/trade/Trade";
import StockDetails from "../pages/stock/details/StockDetails";
import StockTrade from "../pages/stock/trade/StockTrade";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',//设置默认指向路径
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/market',
      name: 'Market',
      component: Market,
    },
    {
      path: '/trade',
      name: 'Trade',
      component: Trade,
    },
    {
      path: '/stock/details',
      name: 'StockDetails',
      component: StockDetails
    },
    {
      path: '/stock/trade',
      name: 'StockTrade',
      component: StockTrade
    }]
})
