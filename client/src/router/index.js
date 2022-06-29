import { createRouter, createWebHistory } from "vue-router";
import Explore from "../layouts/ExploreView.vue";
import Landing from "../layouts/LandingView.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
