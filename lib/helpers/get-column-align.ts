import { Column } from "../@types/column";
import { ColumnAlign } from "../@types/column-align";
import { getAlign } from "./get-align";

export const getColumnAlign = <T>(data: T[], columns: Column<T>[]) => {
  const columnAlign: ColumnAlign[] = [];

  data.forEach(() => {
    return columns.forEach(({ type }) => {
      const align = getAlign(type);

      columnAlign.push(align);
    });
  });

  return columnAlign;
};
