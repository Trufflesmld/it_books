import { PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "./../models/index";

import { call, put, takeEvery } from "redux-saga/effects";
import booksService from "../../../services/booksService";
import { IApiSuccessResponse } from "../models";
import { getBooksFail, getBooksRequest, getBooksSuccess } from "../slice";

function* getBooksRequestWorker(action: PayloadAction) {
  console.log(action);
  try {
    const response: { data: IApiSuccessResponse } = yield call(() =>
      booksService.getNewBooks()
    );
    const books = response.data.books as IBook[];
    yield put(getBooksSuccess(books));
  } catch (error) {
    yield put(getBooksFail(error));
  }
}

export function* booksPageWatcher() {
  yield takeEvery(getBooksRequest, getBooksRequestWorker);
}
