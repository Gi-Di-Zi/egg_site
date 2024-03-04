import { createRouter, createWebHistory } from "vue-router";

import MainPage from "@/components/MainPage.vue";
import CharacterPage from "../components/CharacterPage.vue";
import WorldPage from "../components/WorldPage.vue";
import EpisodePage from "@/components/EpisodePage.vue";
import AuthorPage from "@/components/AuthorPage.vue";
import SalesPage from "@/components/SalesPage.vue";
import ContectPage from "@/components/ContectPage.vue";

const routes = [
  { path: "/character", name: "character-page", component: CharacterPage },
  { path: "/world", name: "world-page", component: WorldPage },
  { path: "/episode", name: "episode-page", component: EpisodePage },
  { path: "/author", name: "author-page", component: AuthorPage },
  { path: "/sales", name: "sales-page", component: SalesPage },
  { path: "/contect", name: "contect-page", component: ContectPage },
  { path: "/", name: "main-page", component: MainPage },
];

const router = createRouter({ history: createWebHistory("/egg"), routes });

export { router };
