import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/index";
import Intro from "@/views/intro";
import Login from "@/views/login";
import Layout from "@/views/layout";
import Register from "@/views/register";
import Goods from "../components/pages/goods";
import Ratings from "../components/pages/ratings";
import Seller from "../components/pages/seller";
import ToRight from "../components/pages/to-right";
import ToLeft from "../components/pages/to-left";
import ToCenter from "../components/pages/to-center";
import Test from "@/views/test";
import Page from "@/views/page";
import Path from "@/components/path/path"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", redirect: { path: "/login" } },
    {
      path: "/index",
      redirect: { path: "/index/goods" },
      name: "Index",
      component: Index,
      children: [
        { path: "goods", component: Goods },
        { path: "ratings", component: Ratings },
        { path: "seller", component: Seller },
        { path: "right", component: ToRight },
        { path: "left", component: ToLeft },
        { path: "center", component: ToCenter }
      ]
    },
    //新路由 view
    {
      path: "/test",
      name: "Test",
      component: Path,
    //   children: [
    //     { path: "goods", component: Goods },
    //     { path: "ratings", component: Ratings },
    //     { path: "seller", component: Seller },
    //     { path: "right", component: ToRight },
    //     { path: "left", component: ToLeft },
    //     { path: "center", component: ToCenter }
    //   ]
    },
    { path: "/intro", component: Intro },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/layout", component: Layout },
    { path: "/test", component: Test },
    { path: "/page", component: Page }
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
