import styled from "styled-components";
import { PALETTE } from "../../../../config/palette";
export const Container = styled.div`
  /* margin-top: 40px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1500px;
`;
export const Title = styled.span`
  font-family: "Catallina";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  text-align: center;
`;
export const MainInfContainer = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 20px;
  font-family: "Poppins";
  font-style: normal;
  max-width: 1000px;
`;
export const Image = styled.div<{ url: string | undefined }>`
  height: 400px;
  width: 310px;
  background: no-repeat center/150% url(${({ url }) => url});
  background-color: ${PALETTE.mainBGColor};
`;
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 110px;
`;
export const SubTitle = styled.span`
  max-width: 600px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: ${PALETTE.activeFontColor};
  text-align: justify;
`;
export const Row = styled.div`
  margin-bottom: 20px;
  display: flex;
  & div:not(:first-child) {
    margin-left: 60px;
  }
`;
