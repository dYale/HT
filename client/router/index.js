import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Cats from '../views/Cats'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/meow',
      component: Cats
    }
  ],
})
