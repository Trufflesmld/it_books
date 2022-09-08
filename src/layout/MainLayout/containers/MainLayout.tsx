import { FC } from "react";
import { Header } from "../components/Header/Header";
import { Page } from "../components/PageContainer/PageContainer";
export const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <Page />
    </>
  );
};
