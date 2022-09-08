import { PALETTE } from "../../../../config/palette";
import { FieldInfo } from "../FieldInfo/FieldInfo";
import * as s from "./styles";
export const SelectedBookPageView = ({
  title,
  image,
  subtitle,
  authors,
  publisher,
  year,
  pages,
  isbn13,
  isbn10,
  desc,
  price,
}: {
  title?: string | undefined;
  subtitle?: string | undefined;
  authors?: string | undefined;
  publisher?: string | undefined;
  isbn10?: string | undefined;
  isbn13?: string | undefined;
  pages?: string | undefined;
  year?: string | undefined;
  rating?: string | undefined;
  desc?: string | undefined;
  price?: string | undefined;
  image?: string | undefined;
  url?: string | undefined;
}) => {
  return (
    <s.Container>
      <s.MainInfContainer>
        <s.Image url={image} />
        <s.Information>
          <div>
            <s.SubTitle>{subtitle}</s.SubTitle>
            <s.Row>
              <FieldInfo title={"Authors"} value={authors} />
            </s.Row>
            <s.Row>
              <FieldInfo title={"Published"} value={year} />
              <FieldInfo title={"Publisher"} value={publisher} />
            </s.Row>
            <s.Row>
              <FieldInfo title={"Pages"} value={pages} />
              <FieldInfo title={"ISBN-10"} value={isbn10} />
              <FieldInfo title={"ISBN-13"} value={isbn13} />
            </s.Row>
          </div>

          <s.Row>
            <FieldInfo
              title={"Price"}
              value={price}
              style={{ fontSize: "30px", fontColor: PALETTE.activeFontColor }}
            />
          </s.Row>
        </s.Information>
      </s.MainInfContainer>
      <FieldInfo title={"About"} value={desc} style={{ fontSize: "16px" }} />
    </s.Container>
  );
};
