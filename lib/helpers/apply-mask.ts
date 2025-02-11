/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnMask } from "../@types/column-mask";
import { ColumnType } from "../@types/column-type";
import { cpfMask } from "../utils/masks/cpf-mask";
import { cpfOrCnpjMask } from "../utils/masks/cpf-or-cnpj-mask";
import { currencyMask } from "../utils/masks/currency-mask";
import { dateMask } from "../utils/masks/date-mask";
import { dateTimeMask } from "../utils/masks/date-time-mask";
import { decimalMask } from "../utils/masks/decimal-mask";
import { phoneMask } from "../utils/masks/phone-mask";
import { rgMask } from "../utils/masks/rg-mask";
import { timeMask } from "../utils/masks/time-mask";
import { zipcodeMask } from "../utils/masks/zipcode-mask";

type ApplyMaskParams<T = any> = {
  value: string;
  item: T;
  mask: ColumnMask<T> | undefined;
  digits: number | undefined;
  type: ColumnType;
};

export const applyMask = <T>({
  value,
  item,
  mask,
  digits,
  type,
}: ApplyMaskParams<T>) => {
  if (typeof mask === "function") {
    return mask(item);
  }

  if (mask === "phone") {
    return phoneMask(value);
  }

  if (mask === "cpf") {
    return cpfMask(value);
  }

  if (mask === "cpf-or-cnpj") {
    return cpfOrCnpjMask(value);
  }

  if (mask === "zipcode") {
    return zipcodeMask(value);
  }

  if (mask === "rg") {
    return rgMask(value);
  }

  if (mask === "currency") {
    return currencyMask(value);
  }

  if (mask === "decimal" || type === "decimal") {
    return decimalMask(value, digits);
  }

  if (mask === "date") {
    return dateMask(value);
  }

  if (mask === "time") {
    return timeMask(value);
  }

  if (mask === "date-time") {
    return dateTimeMask(value);
  }

  return value;
};
