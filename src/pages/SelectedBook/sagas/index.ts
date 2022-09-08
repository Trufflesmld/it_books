import { call, put, takeEvery } from "redux-saga/effects";
import booksService from "../../../services/booksService";
import { IBookFullInf } from "../models";
import {
  getSelectedBookFail,
  getSelectedBookRequest,
  getSelectedBookSuccess,
} from "../slice";

function* getSelectedBookWorker({ payload }: { payload: string }) {
  console.log(payload);

  try {
    const response: { data: IBookFullInf } = yield call(() =>
      booksService.getBookByISBN(payload)
    );
    const book = response.data;
    yield put(getSelectedBookSuccess(book));
  } catch (error) {
    yield put(getSelectedBookFail(error));
  }
}

export function* selectedBookPageWatcher() {
  yield takeEvery(getSelectedBookRequest, getSelectedBookWorker);
}
