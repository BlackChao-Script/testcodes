import Vue from "vue";
import VueRouter from "vue-router";

const home = () => import("_v/home/home.vue");
const classify = () => import("_v/classify/classify.vue");
const shopping = () => import("_v/shopping/shopping.vue");
const mine = () => import("_v/mine/mine.vue");
const detail = () => import("_v/detail/detail");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: home,
    meta: { footShow: true },
  },
  {
    path: "/classify",
    component: classify,
    meta: { footShow: true },
  },
  {
    path: "/shopping",
    component: shopping,
    meta: { footShow: true },
  },
  {
    path: "/mine",
    component: mine,
    meta: { footShow: true },
  },
  {
    path: "/detail/:id",
    component: detail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
