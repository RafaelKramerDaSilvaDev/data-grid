import { onlyNumbers } from "../formatters/only-numbers";

export const zipcodeMask = (value: string) => {
  const numericValue = onlyNumbers(value);

  return numericValue.replace(/(\d{5})(\d{1,3})$/, "$1-$2");
};
