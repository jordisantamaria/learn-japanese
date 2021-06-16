/**
 * TODO: 非推奨にする。authentication-service.tsを代わりに使用するようにする。
 */

import { IVocabList } from "@/types";
import { MutationTree } from "vuex";

export const vocabListMutations: MutationTree<IVocabList[]> = {
  addVocabList(state, payload: IVocabList): void {
      state.push(payload)
  },
};
