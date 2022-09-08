import styled, { keyframes } from "styled-components";

export const Marquee = ({ text }: { text?: any }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};
const scroll = keyframes`
0% {
    transform: translate(0, 0);
}
100% {
    transform: translate(-100%, 0)
}
`;
const Container = styled.h1`
  position: absolute;
  top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  font-family: "Catallina";
  font-style: normal;
  font-weight: 400;
  font-size: 130px;
  color: #bcda02;
  opacity: 0.08;
`;
const Text = styled.span`
  display: flex;
  padding-left: 0;
  /* animation: ${scroll} 1000s infinite linear; */
`;
