import styled from "styled-components";
import { PALETTE } from "../../../../config/palette";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1000px;
`;
export const Title = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: ${PALETTE.blurFontColor};
`;
export const Value = styled.span<{ styles?: any }>`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: ${({ styles: { fontSize } }) => (fontSize ? fontSize : "18px")};
  color: ${({ styles: { fontColor } }) =>
    fontColor ? fontColor : PALETTE.mainFontColor};
  text-align: justify;
`;
