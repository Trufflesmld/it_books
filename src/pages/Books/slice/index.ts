import { createSlice } from "@reduxjs/toolkit";
import { IBooksPageState } from "../../Home/models";

export interface IFilter {
  title: string;
  author: string;
}

interface PageState extends IBooksPageState {
  page: string;
  total?: string | null;
  filter: IFilter;
}

const initialState: PageState = {
  booksList: null,
  page: "1",
  total: null,
  filter: {
    title: "mongodb",
    author: "",
  },
  isLoading: false,
  error: null,
};
export const catalogPageSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    getBooksRequest: (state, { payload }) => {
      state.isLoading = true;
      state.filter = payload.filter;
    },
    getBooksSuccess: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.booksList = payload.books;
      state.page = payload.page;
      state.total = payload.total;
    },
    getBooksFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = JSON.stringify(payload);
    },
  },
});

export const { getBooksRequest, getBooksSuccess, getBooksFail } =
  catalogPageSlice.actions;
export default catalogPageSlice.reducer;
