import { all } from "redux-saga/effects";
import { searchStringWatcher } from "../layout/MainLayout/components/SearchString/sagas";
import { catalogPageWatcher } from "../pages/Books/sagas";
import { booksPageWatcher } from "../pages/Home/sagas";
import { selectedBookPageWatcher } from "../pages/SelectedBook/sagas";
export function* rootSaga() {
  yield all([
    booksPageWatcher(),
    searchStringWatcher(),
    selectedBookPageWatcher(),
    catalogPageWatcher(),
  ]);
}
