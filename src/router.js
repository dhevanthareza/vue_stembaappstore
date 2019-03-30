import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import root from "./components/root"
import develop from "./components/develop"
import network from "./components/network"
import design from "./components/simulate"
import simulate from "./components/simulate"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: '/',
        component: root
      },
      {
        path: '/develop',
        component: develop
      },
      {
        path: '/network',
        component: network
      },
      {
        path: '/design',
        component: design
      },
      {
        path: '/simulate',
        component: simulate
      },
      ]
    },
  ]
})
