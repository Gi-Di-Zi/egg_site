import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "@/components/MainPage.vue";
import CharacterPage from "../components/CharacterPage.vue";
import WorldPage from "../components/WorldPage.vue";
import EpisodePage from "@/components/EpisodePage.vue";
import AuthorPage from "@/components/AuthorPage.vue";
import SalesPage from "@/components/SalesPage.vue";
import ContectPage from "@/components/ContectPage.vue";
import AdminPage from "@/components/AdminPage.vue";
import ErrorPage from "@/components/ErrorPage.vue";

const routes = [
  { path: "/character", name: "character-page", component: CharacterPage },
  { path: "/world", name: "world-page", component: WorldPage },
  { path: "/episode", name: "episode-page", component: EpisodePage },
  { path: "/author", name: "author-page", component: AuthorPage },
  { path: "/sales", name: "sales-page", component: SalesPage },
  { path: "/contect", name: "contect-page", component: ContectPage },
  { path: "/", name: "main-page", component: MainPage },
  {
    path: "/admin",
    name: "admin-page",
    component: AdminPage,
    beforeEnter: (to, from, next) => {
      if (!hasAccessToAdmin()) {
        next({ name: "main-page" });
      } else {
        next();
      }
    },
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: ErrorPage },
];

const router = createRouter({ history: createWebHashHistory("/egg"), routes });

function hasAccessToAdmin() {
  return localStorage.getItem("access") === "true";
}
router.beforeEach((to, from, next) => {
  if (to.path === "/admin" && !hasAccessToAdmin()) {
    next({ name: "main-page" });
  } else if (to.path === "/") {
    // If going to main page, clear localStorage
    localStorage.clear();
    next();
  } else {
    next();
  }
});

export { router };
