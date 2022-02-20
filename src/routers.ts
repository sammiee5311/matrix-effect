import { createWebHistory, createRouter } from "vue-router";
import Matrix from "./views/Matrix.vue";
import Home from "./views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/matrix",
    name: "Matrix",
    component: Matrix,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
