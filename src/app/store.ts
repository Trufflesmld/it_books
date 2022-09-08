import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import searchStringReducer from "../layout/MainLayout/components/SearchString/slice";
import catalogPageReducer from "../pages/Books/slice";
import homePageReducer from "../pages/Home/slice";
import selectedBookPageReducer from "../pages/SelectedBook/slice";
import { rootSaga } from "./rootSaga";
let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    searchString: searchStringReducer,
    selectedBookPage: selectedBookPageReducer,
    catalogPage: catalogPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
