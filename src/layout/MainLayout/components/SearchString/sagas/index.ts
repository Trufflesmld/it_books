import { PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../../../../pages/Home/models/index";
import { IBooksPageState } from "./../../../../../pages/Home/models/index";
import { searchStringSelector } from "./../selectors/index";

import { call, debounce, put, select, takeEvery } from "redux-saga/effects";
import { IApiSuccessResponse } from "../../../../../pages/Home/models/index";
import booksService from "../../../../../services/booksService";
import {
  getBooksFail,
  getBooksRequest,
  getBooksSuccess,
  setBooks,
  setSearchStringValue,
} from "../slice";

function* setSearchValueWorker({ payload }: { payload: string }) {
  if (payload.length > 3) {
    yield put(getBooksRequest(payload));
  } else {
    const { booksList }: { booksList: IBook[] | null } = yield select(
      searchStringSelector
    );
    if (booksList !== null || booksList === undefined) {
      yield put(setBooks(null));
    }
  }
}

function* getBooksRequestWorker({ payload }: { payload: string }) {
  try {
    const response: { data: IApiSuccessResponse } = yield call(() =>
      booksService.getBooksByKeyword(payload as any)
    );
    const books = response.data.books as IBook[];
    yield put(getBooksSuccess(books));
  } catch (error) {
    yield put(getBooksFail(error));
  }
}

export function* searchStringWatcher() {
  yield takeEvery(getBooksRequest, getBooksRequestWorker);
  yield debounce(400, setSearchStringValue, setSearchValueWorker);
}
