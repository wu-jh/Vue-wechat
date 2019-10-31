import Vue from 'vue'
import VueRouter from 'vue-router'
import MailList from '../views/MailList.vue'
import Information from '../views/Information.vue'
import Find from '../views/Find.vue'
import Me from '../views/Me.vue'
import ChatRoom from '../views/ChatRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mailList',
    component: MailList
  },
  {
    path: '/information',
    name: 'information',
    component: Information
  },
  {
    path: '/find',
    name: 'find',
    component: Find
  },
  {
    path: '/me',
    name: 'me',
    component: Me
  },
  {
    path: '/chatRoom',
    name: 'chatRoom',
    component: ChatRoom
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
