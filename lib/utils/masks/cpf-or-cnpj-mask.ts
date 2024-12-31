import { onlyNumbers } from "../formatters/only-numbers";
import { cnpjMask } from "./cnpj-mask";
import { cpfMask } from "./cpf-mask";

export const cpfOrCnpjMask = (value: string) => {
  const numericValue = onlyNumbers(value);

  if (numericValue.length <= 11) return cpfMask(numericValue);

  return cnpjMask(numericValue);
};
