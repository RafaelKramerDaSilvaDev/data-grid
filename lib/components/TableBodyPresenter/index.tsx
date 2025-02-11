import { Column } from "../../@types/column";
import { ColumnAlign } from "../../@types/column-align";
import { applyMask } from "../../helpers/apply-mask";
import { TableDataCell } from "../TableDataCell";

type TableBodyPresenterProps<T> = {
  filteredColumns: Column<T>[];
  columnAlign: ColumnAlign[];
  item: T & { id: number };
};

export const TableBodyPresenter = <T,>({
  filteredColumns,
  columnAlign,
  item,
}: TableBodyPresenterProps<T>) => {
  return filteredColumns.map(({ field, mask, digits, type }, columnIndex) => {
    const align = columnAlign[columnIndex];
    const value = item[field];
    const maskedValue = applyMask({
      value: String(value),
      item,
      mask,
      digits,
      type,
    });
    const key = `${item.id}-${String(field)}`;

    return (
      <TableDataCell key={key} align={align}>
        {maskedValue}
      </TableDataCell>
    );
  });
};
