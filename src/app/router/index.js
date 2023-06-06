import { createRouter, createWebHistory } from 'vue-router'
// import MainPage from '@/pages/MainPage/MainPage.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import(/* webpackChunkName: "MainPage" */ '@/pages/MainPage/MainPage.vue')
  },
  {
    path: '/proflie/:id',
    name: 'ProfilePage',
    component: () => import(/* webpackChunkName: "ProfilePage" */ '@/pages/ProfilePage/ProfilePage.vue')
  },
  {
    path: '/proflie_edit',
    name: 'ProfileEditPage',
    component: () => import(/* webpackChunkName: "ProfileEditPage" */ '@/pages/ProfileEditPage/ProfileEditPage.vue')
  },
  {
    path: '/settings',
    name: 'SettingsPage',
    component: () => import(/* webpackChunkName: "SettingsPage" */ '@/pages/SettingsPage/SettingsPage.vue')
  },
  {
    path: '/lenta',
    name: 'LentaPage',
    component: () => import(/* webpackChunkName: "LentaPage" */ '@/pages/LentaPage/LentaPage.vue')
  },
  {
    path: '/chat',
    name: 'ChatPage',
    component: () => import(/* webpackChunkName: "ChatPage" */ '@/pages/ChatPage/ChatPage.vue')
  },
  {
    path: '/messages/:id',
    name: 'MessagePage',
    component: () => import(/* webpackChunkName: "MessagePage" */ '@/pages/MessagePage/MessagePage.vue')
  },
  {
    path: '/like',
    name: 'LikePage',
    component: () => import(/* webpackChunkName: "LikePage" */ '@/pages/LikePage/LikePage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
