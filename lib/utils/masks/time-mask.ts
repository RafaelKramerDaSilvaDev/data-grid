import { onlyNumbers } from "../formatters/only-numbers";

export const timeMask = (value: string) => {
  const numericValue = onlyNumbers(value);

  return numericValue.replace(/(\d{2})(\d{1,2})$/, "$1:$2");
};
