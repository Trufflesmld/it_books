import { FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../../../assets/icons/logo.svg";
import { Button } from "../../../../commonComponents/Button/Button";
import { ROUTE_NAMES } from "../../../../Router/routeNames";
import { SearchString } from "../SearchString/SearchString";
import * as s from "./styles";
export const Header: FC = () => {
  const navigate = useNavigate();
  const logoClickHandler = (event: MouseEvent) => {
    event.preventDefault();
    navigate(ROUTE_NAMES.HOME);
  };
  const buttonClickHandler = () => {
    navigate(ROUTE_NAMES.BOOKS);
  };
  return (
    <s.HeaderContainer>
      <Logo onClick={logoClickHandler} style={{ cursor: "pointer" }} />
      <SearchString />
      <Button title={"Catalog"} clickHandler={buttonClickHandler} />
    </s.HeaderContainer>
  );
};
