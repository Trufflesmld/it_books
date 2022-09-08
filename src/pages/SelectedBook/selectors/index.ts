import { RootState } from "./../../../app/store";
export const selectedBookSelector = (state: RootState) =>
  state.selectedBookPage;
