import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Login from "@/views/LoginView.vue";


const routes: Array<RouteRecordRaw> = [
  {
    meta: {
      title: "Login",
    },
    path: "/",
    name: "Login",
    // component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
    // component: () => import("@/views/LoginView.vue"),
    component: Login
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
