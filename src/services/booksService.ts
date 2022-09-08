import api from "../api/config";

class booksService {
  static instance = new booksService();
  getNewBooks() {
    return api.get(`/new`);
  }
  getBooksByKeyword(keyword: string) {
    return api.get(`/search/${keyword}`);
  }
  getBookByISBN(isbn: string) {
    return api.get(`/books/${isbn}`);
  }
  getBookByFilter(keyword: string, page: string) {
    return api.get(`/search/${keyword}/${page}`);
  }
}
//test
export default booksService.instance;
