import { Column } from "../@types/column";
import { getAlign } from "./get-align";

export const getColumnAlign = <T>(data: T[], columns: Column<T>[]) => {
  const columnData: { align: "left" | "right" }[] = [];

  data.forEach(() => {
    return columns.forEach(({ type }) => {
      const align = getAlign(type);

      columnData.push({ align });
    });
  });

  return columnData;
};
