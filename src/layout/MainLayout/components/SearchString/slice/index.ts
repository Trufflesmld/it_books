import { createSlice } from "@reduxjs/toolkit";
import { IBooksPageState } from "../../../../../pages/Home/models/index";
interface ISearchStringState extends IBooksPageState {
  searchStringValue: string;
}
const initialState: ISearchStringState = {
  searchStringValue: "",
  booksList: null,
  isLoading: false,
  error: null,
};
export const searchStringSlice = createSlice({
  name: "searchString",
  initialState,
  reducers: {
    getBooksRequest: (state, { payload }) => {
      state.isLoading = true;
    },
    getBooksSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.booksList = payload;
    },
    getBooksFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = JSON.stringify(payload);
      state.booksList = null;
    },
    setBooks: (state, { payload }) => {
      state.isLoading = false;
      state.booksList = payload;
    },
    setSearchStringValue: (state, { payload }) => {
      state.searchStringValue = payload;
    },
  },
});

export const {
  getBooksRequest,
  getBooksSuccess,
  getBooksFail,
  setBooks,
  setSearchStringValue,
} = searchStringSlice.actions;
export default searchStringSlice.reducer;
