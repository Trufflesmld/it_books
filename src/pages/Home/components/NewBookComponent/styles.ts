import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { PALETTE } from "../../../../config/palette";

export const LinkContainer = styled.div<{ large?: boolean; url: string }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: no-repeat center url(${({ url }) => url});
  background-color: ${PALETTE.mainBGColor};
  background-position: top -150px;
  margin-left: 50px;
  ${({ large }) =>
    large
      ? css`
          width: 300px;
          height: 365px;
          background-size: 150%;
          /* 
          box-shadow: 0px 0px 500px #bcda02; */
        `
      : css`
          width: 200px;
          height: 250px;
        `};
  :hover {
    transform: scale(1.05);
  }
  transition: all 0.3s ease;
`;

export const StyledLink = styled(NavLink)`
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: ${PALETTE.mainFontColor};
`;
