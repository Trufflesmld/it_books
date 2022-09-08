import { useState } from "react";
import * as s from "./styles";

interface IProps {
  url: string;
}
export const Image = ({ url }: IProps) => {
  const [isLoaded, setSsLoaded] = useState(true);

  return (
    <s.ImageContainer>
      <s.Img src={url} onLoad={() => setSsLoaded(false)} isLoaded={isLoaded} />
      {isLoaded && <s.Loader>Wait...</s.Loader>}
    </s.ImageContainer>
  );
};
