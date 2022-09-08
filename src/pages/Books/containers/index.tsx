import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useForm } from "../../../hooks/useForm";

import { BooksPageView } from "../components/BooksPageView/BooksPageView";
import { catalogSelector } from "../selectors";
import { getBooksRequest } from "../slice";
import { filterToString } from "../utils/filterToString";

export const BooksPage = () => {
  const dispatch = useAppDispatch();
  const { booksList, page, total, filter } = useAppSelector(catalogSelector);
  const { formValues, handleChange } = useForm(filter);

  const goToPageHandler = (page: number) => {
    dispatch(
      getBooksRequest({
        filter: formValues,
        page: `${+page + 1}`,
      })
    );
  };

  const searchHandler = () => {
    dispatch(
      getBooksRequest({
        filter: formValues,
        page: `1`,
      })
    );
  };

  useEffect(() => {
    dispatch(getBooksRequest({ filter: formValues, page: `${+page}` }));
  }, []);

  return (
    <BooksPageView
      booksList={booksList}
      pageCount={total ? Math.ceil(+total / 10) : 0}
      goToPageHandler={goToPageHandler}
      pageNumber={+page - 1}
      handleChange={handleChange}
      formValues={formValues}
      searchHandler={searchHandler}
    />
  );
};
