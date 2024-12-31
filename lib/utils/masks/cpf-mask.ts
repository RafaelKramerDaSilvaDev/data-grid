import { onlyNumbers } from "../formatters/only-numbers";

export const cpfMask = (value: string) => {
  const numericValue = onlyNumbers(value);

  return numericValue
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};
