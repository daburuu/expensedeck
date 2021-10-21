import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Edit from "@/views/Edit.vue";
import Register from "@/views/Register.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;