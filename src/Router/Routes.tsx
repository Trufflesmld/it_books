import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout/containers/MainLayout";
import { BooksPage } from "../pages/Books/containers";
import { Home } from "../pages/Home/containers";
import { SelectedBookPage } from "../pages/SelectedBook/containers";

import { ROUTE_NAMES } from "./routeNames";

export const Router: FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTE_NAMES.HOME} element={<Home />} />
        <Route path={ROUTE_NAMES.BOOKS} element={<BooksPage />} />
        <Route path={ROUTE_NAMES.BOOK} element={<SelectedBookPage />} />
      </Route>
    </Routes>
  );
};
