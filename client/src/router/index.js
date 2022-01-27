import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layouts/Main.vue"),
    children: [
      {
        path: "files",
        name: "files",
        component: () => import("@/views/Files.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
