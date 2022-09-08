import { Button } from "../../../../commonComponents/Button/Button";
import { Input } from "../../../../commonComponents/Input/Input";
import { IFilter } from "../../slice";
import * as s from "./styles";
export const FilterForm = ({
  handleChange,
  formValues,
  searchHandler,
}: {
  handleChange: (e: any) => void;
  searchHandler: () => void;
  formValues: IFilter;
}) => {
  return (
    <s.Container>
      <s.Form>
        <Input
          name={"title"}
          value={formValues.title}
          placeholder={"Title"}
          onChange={handleChange}
        />
        <Input
          name={"author"}
          value={formValues.author}
          placeholder={"Author"}
          onChange={handleChange}
        />
      </s.Form>
      <Button title={"Search"} clickHandler={searchHandler} />
    </s.Container>
  );
};
