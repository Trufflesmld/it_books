import { FC, Fragment } from "react";
import { IBook } from "../../models/index";
import { NewBookComponent } from "../NewBookComponent/NewBookComponent";
import * as s from "./styles";

interface IProps {
  booksList: IBook[] | null | undefined;
}

export const NewBooksList = ({ booksList }: IProps) => {
  return (
    <s.ListContainer>
      {booksList?.map((book) => (
        <Fragment key={book.isbn13}>
          <NewBookComponent isbn={book.isbn13} url={book.image} />
        </Fragment>
      ))}
    </s.ListContainer>
  );
};
