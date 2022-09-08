import styled, { css } from "styled-components";
import { PALETTE } from "../../../../config/palette";

export const Container = styled.form<{ focused: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 600px;
  height: 50px;
  border: 1px solid transparent;
  padding-left: 13px;
  border-radius: 10px;
  margin-left: 110px;
  margin-right: 115px;
  ${({ focused }) =>
    focused &&
    css`
      border-color: ${PALETTE.activeBorderColor};
    `}

  transition: all 0.3s ease;
`;
export const Input = styled.input`
  flex: 1;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  color: ${PALETTE.mainFontColor};
  margin-left: 20px;
`;
export const SearchResultContainer = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow-y: scroll;
  padding: 15px 0;
  width: 100%;
  border: 1px solid red;
  top: 65px;
  left: 0;
  border: 1px solid ${PALETTE.activeBorderColor};
  border-radius: 10px;
  background: #08090b;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
export const LinkContainer = styled.div`
  padding: 7px 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  :hover {
    * {
      color: ${PALETTE.activeFontColor};
    }
  }
`;
export const HightLitedText = styled.span`
  color: ${PALETTE.activeFontColor};
`;
