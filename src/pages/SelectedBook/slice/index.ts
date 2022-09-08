import { createSlice } from "@reduxjs/toolkit";
import { IBookFullInf } from "./../models/index";
interface ISelectedBookPageState {
  bookIformation: IBookFullInf | null;
  isLoading: boolean;
  error: any;
}

const initialState: ISelectedBookPageState = {
  bookIformation: null,
  isLoading: false,
  error: null,
};
export const SelectedBookPageSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getSelectedBookRequest: (state, { payload }) => {
      state.isLoading = true;
    },
    getSelectedBookSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.bookIformation = payload;
    },
    getSelectedBookFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = JSON.stringify(payload);
    },
  },
});

export const {
  getSelectedBookRequest,
  getSelectedBookSuccess,
  getSelectedBookFail,
} = SelectedBookPageSlice.actions;
export default SelectedBookPageSlice.reducer;
