/**
 * TODO: 非推奨にする。authentication-service.tsを代わりに使用するようにする。
 */

import { IVocabList } from "@/types";
import { Module } from "vuex";
import { vocabListActions } from "./actions";
import { vocabListMutations } from "./mutations";
import data from "../../../../data";

const vocabListModule: Module<IVocabList[], any> = {
  namespaced: true,
  state: data.vocabLists,
  getters: {},
  mutations: vocabListMutations,
  actions: vocabListActions,
};
export default vocabListModule;
