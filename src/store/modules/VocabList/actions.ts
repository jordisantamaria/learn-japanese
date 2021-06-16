import { ActionContext, IVocabList } from "@/types";
import { ActionTree } from "vuex";

export const vocabListActions: ActionTree<IVocabList[], any> = {
  async createList(
    ctx: ActionContext,
    payload: IVocabList
  ): Promise<IVocabList> {
    ctx.commit("addVocabList", payload);
    return payload;
  },
};
