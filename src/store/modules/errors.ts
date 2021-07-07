import store from '@/store';
import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ dynamic: true, store, name: 'errors', namespaced: true })
export default class Errors extends VuexModule {
  public errorMessage = '';

  @Mutation
  SET_ERROR(errorMessage: string) {
    console.log('set error message')
    this.errorMessage = errorMessage;
  }

  @Mutation
  RESET_ERROR_MESSAGE() {
    this.errorMessage = '';
  }
}
export const errorsModule = getModule(Errors);
