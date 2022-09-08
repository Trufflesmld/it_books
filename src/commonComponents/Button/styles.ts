import styled, { css } from "styled-components";
import { PALETTE } from "../../config/palette";
export const StyledButton = styled.button<{
  typeButton: "empty" | "outlined";
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 10px;
  text-decoration: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  padding: 14px 30px;
  cursor: pointer;
  ${({ typeButton }) =>
    typeButton === "outlined" &&
    css`
      background: transparent;
      color: ${PALETTE.mainFontColor};
      border: 1px solid #f3fffe;
      :hover {
        color: ${PALETTE.mainBGColor};
        background: ${PALETTE.mainFontColor};
      }
    `}
  transition: all 0.3s ease;
`;
