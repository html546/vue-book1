import Vue from 'vue'
import Router from 'vue-router'
/* import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';
import Add from '../components/Add.vue'; */
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, //this.$route.meta.keepAlive
    {
      path: '/home',
      component: () => import('../components/Home.vue'),
      meta: { keepAlive: true, title: '首页' }
    },
    {
      path: '/collect',
      component: () => import('../components/Collect.vue'),
      meta: { title: '收藏' }
    },
    {
      path: '/add',
      component: () => import('../components/Add.vue'),
      meta: { title: '添加' }
    },
    // /detail/1  {bid:1} 路径参数 必须有但是可以随机
    {
      path: '/detail/:bid',
      component: () => import('../components/Detail.vue'),
      name: 'detail',
      meta: { title: '详情' }
    },
    {
      path: '/list',
      component: () => import('../components/List.vue'),
      meta: { title: '列表' }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
