import { createSlice } from "@reduxjs/toolkit";
import { IBooksPageState } from "../models";

const initialState: IBooksPageState = {
  booksList: null,
  isLoading: false,
  error: null,
};
export const homePageSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooksRequest: (state) => {
      state.isLoading = true;
    },
    getBooksSuccess: (state, { payload }) => {
      const newBooks = payload.sort(() => Math.random() - 0.5);
      newBooks.length = 4;
      state.isLoading = false;
      state.booksList = newBooks;
    },
    getBooksFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = JSON.stringify(payload);
    },
  },
});

export const { getBooksRequest, getBooksSuccess, getBooksFail } =
  homePageSlice.actions;
export default homePageSlice.reducer;
