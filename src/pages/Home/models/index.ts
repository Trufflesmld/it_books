export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}
export interface IBooksPageState {
  booksList: IBook[] | null;
  isLoading: boolean;
  error: string | null;
}
export interface IApiSuccessResponse {
  error: string | null;
  total: string;
  page: string;
  books: IBook[];
}
