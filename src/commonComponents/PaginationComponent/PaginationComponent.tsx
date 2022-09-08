import { ReactComponent as ArrowLeft } from "../../assets/icons/leftArrow.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/rightArrow.svg";
import * as s from "./styles";
export const Pagination = ({
  gotoPage,
  pageCount,
  pageNumber,
}: {
  gotoPage: (page: number) => void;
  pageCount: number;
  pageNumber: number;
}) => {
  const pageClickHandler = (selectedPageNumber: any) => {
    const { selected: page } = selectedPageNumber;
    gotoPage(page);
  };
  return (
    <>
      <s.StyledPagination
        nextLabel={<ArrowRight />}
        onPageChange={pageClickHandler}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={<ArrowLeft />}
        renderOnZeroPageCount={undefined}
        initialPage={pageNumber}
      />
    </>
  );
};
