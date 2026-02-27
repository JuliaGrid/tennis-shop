export interface IResponse<T> {
  isError: boolean;
  data?: T;
}
