import { Column } from "../../@types/column";
import { ColumnAlign } from "../../@types/column-align";
import { SortType } from "../../@types/sort-type";
import { getReverseDirectionColumnMenu } from "../../helpers/get-reverse-direction-column-menu";
import { TableHeadCell } from "../TableHeadCell";
import { TableRow } from "../TableRow";

type TableHeadPresenterProps<T> = {
  filteredColumns: Column<T>[];
  columnAlign: ColumnAlign[];
  columnMenuIndex: number | null;
  handleColumnMenu: (columnIndex: number) => void;
  setSort: (type: SortType, field: keyof T) => void;
};

export const TableHeadPresenter = <T,>({
  filteredColumns,
  columnAlign,
  columnMenuIndex,
  handleColumnMenu,
  setSort,
}: TableHeadPresenterProps<T>) => {
  return (
    <TableRow>
      {filteredColumns.map(({ label, field, width }, columnIndex) => {
        const align = columnAlign[columnIndex];
        const columnMenuOpen = columnMenuIndex === columnIndex;
        const enabledTooltip = columnMenuIndex === null;
        const reverseDirectionColumnMenu = getReverseDirectionColumnMenu(
          filteredColumns.length,
          columnIndex
        );

        return (
          <TableHeadCell
            key={label}
            align={align}
            label={label}
            onColumnMenu={() => handleColumnMenu(columnIndex)}
            columnMenuOpen={columnMenuOpen}
            enabledTooltip={enabledTooltip}
            reverseDirectionColumnMenu={reverseDirectionColumnMenu}
            onSort={(type) => setSort(type, field)}
            width={width}
          />
        );
      })}
    </TableRow>
  );
};
