import Vue from "vue";
import VueRouter from "vue-router";

const home = () => import("_v/home/home.vue");
const classify = () => import("_v/classify/classify.vue");
const shopping = () => import("_v/shopping/shopping.vue");
const mine = () => import("_v/mine/mine.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/classify",
    name: "classify",
    component: classify,
  },
  {
    path: "/shopping",
    name: "shopping",
    component: shopping,
  },
  {
    path: "/mine",
    name: "mine",
    component: mine,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
