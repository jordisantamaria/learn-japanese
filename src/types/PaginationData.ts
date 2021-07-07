export interface PaginationData<T> {
  result: "success" | "failure";
  found: number;
  lastPage: number;
  currentPage: number;
  pageSize: number;
  data: Array<T>;
}
