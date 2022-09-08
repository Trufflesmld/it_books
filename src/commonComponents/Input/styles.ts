import styled from "styled-components";
import { PALETTE } from "../../config/palette";

export const StyledInput = styled.input`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  height: 50px;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid ${PALETTE.mainFontColor};
  color: ${PALETTE.mainFontColor};
`;
