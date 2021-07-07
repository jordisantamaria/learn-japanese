import { VocabItem } from "@/types/VocabItem";

export interface VocabList {
  id: number;
  name: string;
  vocabItems: VocabItem[];
}
