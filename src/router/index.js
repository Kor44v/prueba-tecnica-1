import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Admin from '@/views/Admin.vue'
import UserProfile from '@/views/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/admin',
    name:'admin',
    component:Admin
  },
  {
    path:'/admin/:id',
    name:'userprofile',
    component:UserProfile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
