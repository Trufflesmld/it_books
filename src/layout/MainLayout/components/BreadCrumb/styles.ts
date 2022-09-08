import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../../assets/icons/arrow.svg";
import { PALETTE } from "../../../../config/palette";
export const Container = styled.div`
  display: flex;
  align-self: center;
`;
export const LinkContainer = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${PALETTE.mainFontColor};
  :hover {
    text-decoration: underline;
  }
`;
export const CrumbArrow = styled(Arrow)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 10px;
`;
export const Title = styled.span`
  font-family: "Catallina";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  text-align: center;
`;
export const TitleContainer = styled.div`
  height: 130px;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;
