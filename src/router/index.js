import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Get from '../views/Get.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Get',
    name: 'Get',
    component: Get
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
