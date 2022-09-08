import * as s from "./styles";
export const Button = ({ title, clickHandler }: IButton) => {
  return (
    <s.StyledButton
      onClick={clickHandler}
      type="button"
      typeButton={"outlined"}
    >
      {title}
    </s.StyledButton>
  );
};

interface IButton {
  title: string;
  clickHandler: () => void;
}
