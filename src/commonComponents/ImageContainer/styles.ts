import styled, { css } from "styled-components";

export const ImageContainer = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* width: 200px;
  height: 280px; */
  background: transparent;
  width: 100%;
  height: 100%;
`;
export const Img = styled.img<{ isLoaded?: boolean }>`
  ${({ isLoaded }) =>
    isLoaded
      ? css`
          display: none;
        `
      : css`
          display: block;
          height: 100%;
        `}
`;
export const Loader = styled.span``;
