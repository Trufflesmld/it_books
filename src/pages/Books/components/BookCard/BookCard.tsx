import { ROUTE_NAMES } from "../../../../Router/routeNames";
import { StyledLink } from "../../../Home/components/NewBookComponent/styles";
import * as s from "./styles";

export const BookCard = ({
  title,
  url,
  price,
  isbn,
}: {
  title: string;
  url: string;
  price: string;
  isbn: string;
}) => {
  return (
    <s.Container>
      <StyledLink to={`${ROUTE_NAMES.BOOKS}/${isbn}`}>
        <s.Image url={url} />
        <s.BookInf>
          <s.Title>{title}</s.Title>
        </s.BookInf>
      </StyledLink>
    </s.Container>
  );
};
