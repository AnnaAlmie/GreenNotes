import { createRouter, createWebHistory } from "vue-router";
import NotesPage from "./pages/NotesPage.vue";
import PlantDetailPage from "./pages/PlantDetailPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: NotesPage,
  },
  {
    path: "/GreenNotes",
    redirect: "/",
  },
  {
    path: "/plant/:id",
    name: "PlantDetail",
    component: PlantDetailPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
