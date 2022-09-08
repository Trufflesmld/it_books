import styled from "styled-components";

export const Container = styled.div`
  margin: 10px 50px;
  padding-bottom: 20px;
  /* height: 350px; */
  width: calc(20% - 100px);
  border-radius: 10px;
  :hover {
    background: #191a15;
  }
  transition: all 0.3s ease;
`;
export const Image = styled.div<{ url?: string }>`
  min-height: 300px;
  background: no-repeat center/90% url(${({ url }) => url});
`;
export const BookInf = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
`;

export const Title = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
`;
