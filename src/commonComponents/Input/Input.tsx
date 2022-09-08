import * as s from "./styles";
interface IInput {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: any) => void;
}
export const Input = ({ name, value, placeholder, onChange }: IInput) => {
  return (
    <s.StyledInput
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
