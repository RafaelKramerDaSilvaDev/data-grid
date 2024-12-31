import { onlyNumbers } from "../formatters/only-numbers";

export const currencyMask = (value: string) => {
  const numericValue = onlyNumbers(value);

  const formattedValue = (Number(numericValue) / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formattedValue;
};
