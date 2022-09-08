import { BookTitle } from "../commonComponents/BookTitle/BookTitle";
import { ROUTE_NAMES } from "./routeNames";

export const breadCrumbCongig = [
  {
    path: ROUTE_NAMES.HOME,
    breadcrumb: "Main",
  },
  {
    path: ROUTE_NAMES.BOOKS,
    breadcrumb: "Catalog",
  },
  {
    path: ROUTE_NAMES.BOOK,
    breadcrumb: BookTitle,
  },
];
