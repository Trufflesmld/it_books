import { PayloadAction } from "@reduxjs/toolkit";

import { call, put, takeEvery } from "redux-saga/effects";
import booksService from "../../../services/booksService";

import { IApiSuccessResponse, IBook } from "../../Home/models";
import { getBooksFail, getBooksRequest, getBooksSuccess } from "../slice";
import { filterToString } from "../utils/filterToString";

function* getBooksRequestWorker({ payload }: any) {
  try {
    const response: { data: IApiSuccessResponse } = yield call(() =>
      booksService.getBookByFilter(filterToString(payload.filter), payload.page)
    );
    yield put(getBooksSuccess(response.data));
  } catch (error) {
    yield put(getBooksFail(error));
  }
}

export function* catalogPageWatcher() {
  yield takeEvery(getBooksRequest, getBooksRequestWorker);
}
