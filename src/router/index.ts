import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ShowVocabLists from "@/views/vocablists/Index.vue";
import CreateVocabList from "@/views/vocablists/Create.vue";
import StudyVocabList from "@/views/vocablists/Study.vue";
import EditVocabList from "@/views/vocablists/Edit.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/list',
    name: 'ShowVocabLists',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ShowVocabLists
  },
  {
    path: "/list/create",
    name: "CreateVocabList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CreateVocabList,
  },
  {
    path: "/list/study",
    name: "StudyVocabList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: StudyVocabList,
  },
  {
    path: "/list/edit",
    name: "EditVocabList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EditVocabList,
  },
  {
    path: '*',
    meta: {
      requiresAuth: true,
    },
    redirect: { name: 'ShowVocabLists' },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
