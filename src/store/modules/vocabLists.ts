import store from '@/store';

import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { PaginationData } from "@/types/PaginationData";
import { VocabList } from "@/types/VocabList";
import { fetchDeleteVocabList, fetchGetVocabLists, fetchPostVocabList } from "@/store/fetch-api/fetchVocablists";
import { errorsModule } from "@/store/modules/errors";

@Module({ dynamic: true, store, name: 'vocabLists', namespaced: true })
export default class VocabListsModule extends VuexModule {
  public vocabListsArray: VocabList[] = []
  public found = 0
  public lastPage = 0
  public currentPage = 0
  public pageSize = 0


  @Mutation
  FETCH_VOCABLISTS_SUCCESS(paginationData: PaginationData<VocabList>) {
    this.vocabListsArray = paginationData.data;
    this.found = paginationData.found
    this.lastPage = paginationData.lastPage
    this.currentPage = paginationData.currentPage
    this.pageSize = paginationData.pageSize
  }

  @Mutation
  CREATE_VOCABLIST_SUCCESS(vocabList: VocabList) {
    this.vocabListsArray.push(vocabList);
  }

  @Mutation
  UPDATE_VOCABLIST_SUCCESS(resUpdated: VocabList) {
    this.vocabListsArray = this.vocabListsArray.map((res) => {
      return res.id === resUpdated.id ? resUpdated : res;
    });
  }

  @Mutation
  DELETE_VOCABLIST_SUCCESS(id: number) {
    this.vocabListsArray = this.vocabListsArray.filter((res) => {
      return res.id != id
    });
  }

  @Action
  async fetchVocabLists() {
    try {
      const vocabLists: PaginationData<VocabList> = await fetchGetVocabLists();
      console.log('vocabLists fetch = ', vocabLists)
      this.FETCH_VOCABLISTS_SUCCESS(vocabLists);
    } catch (e) {
      console.log('error fetching vocabLists')
      errorsModule.SET_ERROR(e);
    }
  }
  @Action
  async createVocabList(payload: Partial<VocabList>) {
    try {
      console.log('create vocabList');
      const vocabList: VocabList = await fetchPostVocabList(payload);
      this.CREATE_VOCABLIST_SUCCESS(vocabList);
    } catch (e) {
      errorsModule.SET_ERROR(e);
    }
  }

  @Action
  async updateVocabList(payload: VocabList) {
    try {
      // filters can be null, so include them
      // await fetchPutVocabList(payload, id);
      this.UPDATE_VOCABLIST_SUCCESS(payload);
    } catch (e) {
      errorsModule.SET_ERROR(e);
    }
  }

  @Action
  async deleteVocabList(id: number) {
    try {
      await fetchDeleteVocabList(id);
      this.DELETE_VOCABLIST_SUCCESS(id);
    } catch (e) {
      errorsModule.SET_ERROR(e);
    }
  }
}
export const vocabListsModule = getModule(VocabListsModule);
