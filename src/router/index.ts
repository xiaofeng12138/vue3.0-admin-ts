import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component:() =>import("../views/account/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: ()=>import("@/views/account/Register.vue")
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
