import { HightLitedText } from "../styles";
export const highlightSubstring = (string: string, substring: string) => {
  const startIndex = string.toLowerCase().indexOf(substring.toLowerCase());
  const matchString = string.slice(startIndex, startIndex + substring.length);
  const test: any = string.split(matchString);
  test.splice(1, 0, <HightLitedText>{matchString}</HightLitedText>);
  return test;
};
