import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';
import Add from '../components/Add.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, //this.$route.meta.keepAlive
    {
      path: '/home',
      component: Home,
      meta: { keepAlive: true }
    },
    { path: '/collect', component: Collect },
    { path: '/add', component: Add },
    // /detail/1  {bid:1} 路径参数 必须有但是可以随机
    { path: '/detail/:bid', component: Detail, name: 'detail' },
    { path: '/list', component: List },
    { path: '*', redirect: '/home' }
  ]
})
