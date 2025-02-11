import { ColumnMask } from "./column-mask";
import { ColumnType } from "./column-type";

export type Column<T> = {
  label: string;
  field: keyof T;
  type: ColumnType;
  mask?: ColumnMask<T>;
  digits?: number;
  width?: number;
};
