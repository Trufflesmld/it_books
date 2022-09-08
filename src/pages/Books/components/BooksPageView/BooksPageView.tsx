import { Fragment } from "react";
import { Pagination } from "../../../../commonComponents/PaginationComponent/PaginationComponent";
import { IBook } from "../../../Home/models";
import { IFilter } from "../../slice";
import { BookCard } from "../BookCard/BookCard";
import { FilterForm } from "../FilterForm/FilterForm";
import * as s from "./styles";
export const BooksPageView = ({
  booksList,
  pageCount,
  goToPageHandler,
  pageNumber,
  handleChange,
  formValues,
  searchHandler,
}: {
  booksList: IBook[] | null;
  pageCount: number;
  pageNumber: number;
  goToPageHandler: (page: number) => void;
  handleChange: (e: any) => void;
  searchHandler: () => void;
  formValues: IFilter;
}) => {
  return (
    <s.Container>
      <FilterForm
        handleChange={handleChange}
        formValues={formValues}
        searchHandler={searchHandler}
      />
      <s.BooksContainer>
        {booksList &&
          booksList.map((book) => (
            <Fragment key={book.url}>
              <BookCard
                title={book.title}
                url={book.image}
                price={book.price}
                isbn={book.isbn13}
              />
            </Fragment>
          ))}
      </s.BooksContainer>
      <Pagination
        pageCount={pageCount}
        gotoPage={goToPageHandler}
        pageNumber={pageNumber}
      />
    </s.Container>
  );
};
