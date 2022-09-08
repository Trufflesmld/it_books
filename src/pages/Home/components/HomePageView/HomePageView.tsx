import { IBook } from "../../models/index";
import { NewBookComponent } from "../NewBookComponent/NewBookComponent";
import { NewBooksList } from "../NewBooksList/NewBooksList";
import { ShadowTitle } from "../ShadowTitle/ShadowTitle";
import { Title } from "../Title/Title";
import * as s from "./styles";

interface IProps {
  booksList: IBook[] | null;
}
export const HomePageView = ({ booksList }: IProps) => {
  return (
    <>
      <s.NewBooksContainer>
        {booksList !== null && (
          <>
            <NewBookComponent
              isbn={booksList[0]?.isbn13}
              url={booksList[0]?.image}
              large
            />
            <ShadowTitle />
          </>
        )}
        <NewBooksList booksList={booksList?.slice(1)} />
      </s.NewBooksContainer>
      <Title />
    </>
  );
};
