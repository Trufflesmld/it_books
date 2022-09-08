import { FC, Fragment, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Image } from "../../../commonComponents/ImageContainer/ImageContainer";
import { HomePageView } from "../components/HomePageView/HomePageView";
import { NewBooksList } from "../components/NewBooksList/NewBooksList";
import { newBooksSelector } from "../selectors";
import { getBooksRequest } from "../slice";
export const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { booksList } = useAppSelector(newBooksSelector);

  useEffect(() => {
    dispatch(getBooksRequest());
  }, []);

  return (
    <>
      <HomePageView booksList={booksList} />
    </>
  );
};
