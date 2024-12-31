import { onlyNumbers } from "../formatters/only-numbers";
import { cpfMask } from "./cpf-mask";

export const rgMask = (value: string) => {
  const numericValue = onlyNumbers(value);

  if (numericValue.length === 11) return cpfMask(value);

  return numericValue
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1})$/, "$1-$2");
};
