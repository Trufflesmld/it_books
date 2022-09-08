import * as s from "./styles";

export const FieldInfo = ({
  title,
  value,
  style,
}: {
  title: string;
  value: string | undefined;
  style?: any;
}) => {
  return (
    <s.Container>
      <s.Title>{title}</s.Title>
      <s.Value styles={style || {}}>{value}</s.Value>
    </s.Container>
  );
};
