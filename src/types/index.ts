export interface IVocabList {
  id: number;
  name: string;
  vocabItems: IVocabItem[];
}
export interface IVocabItem {
  id?: any;
  word: string;
  translation: string;
  pronunciation: string;
  association: string;
  image?: string;
}

export interface ActionContext {
  commit: (...args: any) => void;
  state: any;
}

export interface IState {
  vocabLists: IVocabList[]
}
