import { IState } from "@/types";
import Vue from "vue";
import Vuex from "vuex";
import vocabListModule from "./modules/VocabList";
import data from "../../data";

Vue.use(Vuex);

export default new Vuex.Store<IState>({
  modules: {
    vocabLists: vocabListModule
  },
});
