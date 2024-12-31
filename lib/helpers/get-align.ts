import { ColumnType } from "../@types/column-type";

export const getAlign = (type: ColumnType) => {
  return type === "number" || type === "decimal" ? "right" : "left";
};
