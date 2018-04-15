import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../components'
import Home from '../components/Home'
import Cats from '../components/Cats'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [ {
    path: '/',
    component: Home
  },
  {
    path: '/meow',
    component: Cats
  }, {
    path: '/blog',
    name: 'feed',
    component: Blog
  }, {
    path: '/blog/by/:author',
    name: 'author',
    props: true,
    component: Blog
  }, {
    path: '/blog/read/:post',
    name: 'post',
    props: true,
    component: Blog
  }]
})
