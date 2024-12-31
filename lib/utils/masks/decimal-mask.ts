import { onlyNumbers } from "../formatters/only-numbers";

export const decimalMask = (value: string, digits?: number) => {
  digits = 2;

  const numericValue = onlyNumbers(value);

  const integerPart = numericValue.slice(0, -digits) || "0";
  const decimalPart = numericValue.slice(-digits).padStart(digits, "0");

  return `${parseInt(integerPart, 10)}.${decimalPart}`;
};
