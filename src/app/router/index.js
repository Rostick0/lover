import { createRouter, createWebHistory } from 'vue-router'
// import MainPage from '@/pages/MainPage/MainPage.vue';

export const ROUTER_CONST = {
  main: '/',
  profile: '/profile',
  profileEdit: '/proflie_edit',
  settings: '/settings',
  lenta: '/lenta',
  chat: '/chat',
  messages: '/messages',
  like: '/like',
}

const routes = [
  {
    path: ROUTER_CONST.main,
    name: 'MainPage',
    component: () => import(/* webpackChunkName: "MainPage" */ '@/pages/MainPage/MainPage.vue')
  },
  {
    path: ROUTER_CONST.profile + '/:id',
    name: 'ProfilePage',
    component: () => import(/* webpackChunkName: "ProfilePage" */ '@/pages/ProfilePage/ProfilePage.vue')
  },
  {
    path: ROUTER_CONST.profileEdit,
    name: 'ProfileEditPage',
    component: () => import(/* webpackChunkName: "ProfileEditPage" */ '@/pages/ProfileEditPage/ProfileEditPage.vue')
  },
  {
    path: ROUTER_CONST.settings,
    name: 'SettingsPage',
    component: () => import(/* webpackChunkName: "SettingsPage" */ '@/pages/SettingsPage/SettingsPage.vue')
  },
  {
    path: ROUTER_CONST.lenta,
    name: 'LentaPage',
    component: () => import(/* webpackChunkName: "LentaPage" */ '@/pages/LentaPage/LentaPage.vue')
  },
  {
    path: ROUTER_CONST.chat,
    name: 'ChatPage',
    component: () => import(/* webpackChunkName: "ChatPage" */ '@/pages/ChatPage/ChatPage.vue')
  },
  {
    path: ROUTER_CONST.messages + '/:id',
    name: 'MessagePage',
    component: () => import(/* webpackChunkName: "MessagePage" */ '@/pages/MessagePage/MessagePage.vue')
  },
  {
    path: ROUTER_CONST.like,
    name: 'LikePage',
    component: () => import(/* webpackChunkName: "LikePage" */ '@/pages/LikePage/LikePage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
