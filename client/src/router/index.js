import Cookies from "js-cookie";

import { createRouter, createWebHistory } from "vue-router";
import Explore from "../layouts/ExploreView.vue";
import Landing from "../layouts/LandingView.vue";

// import pages
import Home from "../views/Landing/HomeView.vue";
import Register from "../views/Landing/RegisterView.vue";
import Login from "../views/Landing/LoginView.vue";

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
    beforeEnter: (to, from, next) => {
      const token = Cookies.get("token");

      if (token) {
        next();
      } else {
        router.push("/");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
