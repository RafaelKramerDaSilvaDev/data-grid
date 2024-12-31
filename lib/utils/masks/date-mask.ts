import { onlyNumbers } from "../formatters/only-numbers";

export const dateMask = (value: string) => {
  const numericValue = onlyNumbers(value);

  return numericValue
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
};
