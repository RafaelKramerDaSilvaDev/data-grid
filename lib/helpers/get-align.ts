import { ColumnAlign } from "../@types/column-align";
import { ColumnType } from "../@types/column-type";

export const getAlign = (type: ColumnType): ColumnAlign => {
  return type === "number" || type === "decimal" ? "right" : "left";
};
