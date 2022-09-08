import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ROUTE_NAMES } from "../../../../Router/routeNames";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";
import * as s from "./styles";

export const Page: FC = () => {
  const { pathname } = useLocation();
  return (
    <s.PageContainer>
      {!(pathname === ROUTE_NAMES.HOME) && <BreadCrumb />}
      <Outlet />
    </s.PageContainer>
  );
};
