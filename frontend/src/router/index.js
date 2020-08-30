import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/createAccount",
    name: "CreateAccount",
    component: () => import("../views/CreateAccount.vue"),
  },
  {
    path: "/businessInfo",
    name: "BusinessInfo",
    component: () => import("../views/BusinessInfo.vue"),
  },
  {
    path: "/businessCreated",
    name: "BusinessCreated",
    component: () => import("../views/BusinessCreated.vue"),
  },
  {
    path: "/orderPage",
    name: "OrderPage",
    component: () => import("../views/OrderPage.vue"),
  },
  {
    path: "/newOrder",
    name: "NewOrder",
    component: () => import("../views/NewOrder.vue"),
  },
  {
    path: "/tablesOverview",
    name: "TablesOverview",
    component: () => import("../views/TablesOverview.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
