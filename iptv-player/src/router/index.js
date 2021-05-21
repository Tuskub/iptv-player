import Vue from 'vue'
import VueRouter from 'vue-router'
import Playlist from "../views/Playlist.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Playlist',
    component: Playlist,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  console.log("isauthenticated", isAuthenticated)
  if (requiresAuth && !isAuthenticated) {
    next("/login")
  } else {
    next()
  }
})

export default router
