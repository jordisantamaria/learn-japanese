import { IVocabList } from "@/types";
import { fetchApi, HttpMethod } from "./fetch-api";

export const fetchGetVocabLists = async () => {
    return await fetchApi('vocablists', HttpMethod.GET);
};
export const fetchPostVocabList = async (fields: Partial<IVocabList>) => {
    return await fetchApi(`vocablists`, HttpMethod.POST, fields);
};
export const fetchPutVocabList = async (fields: Partial<IVocabList>, id: number) => {
    return await fetchApi(`vocablists/${id}`, HttpMethod.PUT, fields);
};

export const fetchDeleteVocabList = async (id: number) => {
    return await fetchApi(`vocablists/${id}`, HttpMethod.DELETE);
};
