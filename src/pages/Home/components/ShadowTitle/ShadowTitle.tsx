import styled, { keyframes } from "styled-components";
import { ReactComponent as WelcomeIcon } from "../../../../assets/icons/welcomeIcon.svg";
export const ShadowTitle = () => {
  return (
    <Shadow>
      <WelcomeIcon />
    </Shadow>
  );
};

const Rotate = keyframes`
 
  0% {
    transform: rotate(0deg) scale(0.9);
  }
  100% {
    transform: rotate(360deg) scale(0.9);
  }

`;

const Shadow = styled.div`
  position: absolute;
  z-index: -1;
  top: 15vh;
  left: 15vh;
  height: 1px;
  width: 1px;
  min-height: 600px;
  min-width: 800px;
  background: radial-gradient(
    50% 59.78% at 50% 50%,
    #bcda02 11.77%,
    rgba(1, 16, 38, 0) 86.98%
  );
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  border: 1px solid #000000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transform: rotate(15deg);
  & svg {
    position: relative;
    top: -5vh;
    left: 14vh;
    /* transform: scale(0); */
    animation: 20s linear 0s normal none infinite running ${Rotate};
  }
`;
