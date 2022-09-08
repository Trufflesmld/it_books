import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { ReactComponent as SearchLoupe } from "../../../../assets/icons/searchLoupe.svg";
import { StyledLink } from "../../../../pages/Home/components/NewBookComponent/styles";
import { ROUTE_NAMES } from "../../../../Router/routeNames";
import { searchStringSelector } from "./selectors";
import { getBooksRequest, setSearchStringValue } from "./slice";
import * as s from "./styles";
import { highlightSubstring } from "./utils/higlightSubstring";
export const SearchString = () => {
  const { pathname } = useLocation();
  const ResultContainer = useRef<any>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, booksList, searchStringValue } =
    useAppSelector(searchStringSelector);
  const [focused, setFocused] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchStringValue(e.target.value));
  };

  useEffect(() => {
    const onClickResultContainer = (e: any) =>
      ResultContainer?.current?.contains(e.target) || setShowResult(false);
    document.addEventListener("click", onClickResultContainer);
    return () => document.removeEventListener("click", onClickResultContainer);
  }, [showResult]);

  useEffect(() => {
    if (booksList !== null && booksList.length > 0) {
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  }, [booksList]);

  useEffect(() => {
    dispatch(setSearchStringValue(""));
  }, [pathname]);

  return (
    <s.Container
      focused={focused}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <SearchLoupe />
      <s.Input
        placeholder="Search in library..."
        value={searchStringValue}
        onChange={onChange}
      />
      {showResult && (
        <s.SearchResultContainer ref={ResultContainer}>
          {booksList?.map((book) => (
            <s.LinkContainer key={book.isbn13}>
              <StyledLink to={`${ROUTE_NAMES.BOOKS}/${book.isbn13}`}>
                {highlightSubstring(book.title, searchStringValue)}
              </StyledLink>
            </s.LinkContainer>
          ))}
        </s.SearchResultContainer>
      )}
    </s.Container>
  );
};
