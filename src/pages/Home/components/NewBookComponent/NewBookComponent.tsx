import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../../../Router/routeNames";

import { Image } from "../../../../commonComponents/ImageContainer/ImageContainer";
import * as s from "./styles";

export const NewBookComponent = ({
  isbn,
  large,
  url,
}: {
  isbn: string;
  url: string;
  large?: boolean;
}) => {
  return (
    <s.LinkContainer large={large} url={url}>
      <s.StyledLink to={`${ROUTE_NAMES.BOOKS}/${isbn}`} />
    </s.LinkContainer>
  );
};
