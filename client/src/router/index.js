import Cookies from "js-cookie";

import store from "../store";

import { createRouter, createWebHistory } from "vue-router";
import Explore from "../layouts/ExploreView.vue";
import Landing from "../layouts/LandingView.vue";

// import pages
import Home from "../views/Landing/HomeView.vue";
import Register from "../views/Landing/RegisterView.vue";
import Login from "../views/Landing/LoginView.vue";
import ExploreHome from "../views/Explore/HomeView.vue";
import Profile from "../views/Explore/ProfileView.vue"


const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "register",
        name: "Register",
        component: Register,
      },
      {
        path: "login",
        name: "Login",
        component: Login,
      },
    ],
    beforeEnter: (to, from, next) => {
      const token = Cookies.get("token");

      if (token) {
        router.push("/explore");
      } else {
        next();
      }
    },
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
    children: [
      {
        path: '',
        name: "ExploreHome",
        component: ExploreHome
      },
      {
        path: 'profile',
        name: "Profile",
        component: Profile
      }
    ],
    beforeEnter: (to, from, next) => {
      const token = Cookies.get("token");

      if (token) {
        next();
      } else {
        router.push('/');
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  store.commit('setMenuVisible', false)

  next()
})

export default router;
