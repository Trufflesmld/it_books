import styled from "styled-components";
import { PALETTE } from "../../../../config/palette";

export const Container = styled.div`
  position: absolute;
  z-index: -1;
  right: 15vw;
  top: 45vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-size: 100px;
  font-family: "Catallina";
`;
export const TitleText = styled.span<{ active?: boolean }>`
  color: ${({ active }) =>
    active ? PALETTE.activeFontColor : PALETTE.mainFontColor};
`;
