import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/index";
import Intro from "@/views/intro";
import Login from "@/views/login";
import Goods from "../components/pages/goods";
import Ratings from "../components/pages/ratings";
import Seller from "../components/pages/seller";
import ToRight from "../components/pages/to-right";
import ToLeft from "../components/pages/to-left";
import ToCenter from "../components/pages/to-center";
import Position from "../components/pages/position";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", redirect: { path: "/intro" } },
    {
      path: "/index",
      redirect: { path: "/index/goods" },
      name: "Index",
      component: Index,
      children: [
        { path: "goods", component: Goods },
        { path: "ratings", component: Ratings },
        { path: "seller", component: Seller },
      ]
    },
    { path: "/intro", component: Intro },
    { path: "/login", component: Login }
  ]
});
//   children: [
//     {
//       path: "left",
//       component: ToLeft
//     },
//     {
//         path: "center",
//         component: ToCenter
//       },
//       {
//         path: "right",
//         component: ToRight
//       }
//   ]
