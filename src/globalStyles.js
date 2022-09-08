import { createGlobalStyle } from "styled-components";
import { PALETTE } from "./config/palette";
export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  color: ${PALETTE.mainFontColor};
  /* overflow: hidden; */
  padding: 0;
  margin: 0;
  background-color: ${PALETTE.mainBGColor};
}
#root {
  display: flex;
  flex-direction: column;
  /* overflow: hidden;
  max-height: 100vh; */
  min-height: 100vh;
}
`;
