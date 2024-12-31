import { Column } from "../../../@types/column";
import { ColumnAlign } from "../../../@types/column-align";
import { SortType } from "../../../@types/sort-type";
import { getReverseDirectionColumnMenu } from "../../../helpers/get-reverse-direction-column-menu";
import { Th } from "../../atoms/Th";
import { Thead } from "../../atoms/Thead";
import { Tr } from "../../atoms/Tr";

type TableHeaderProps<T> = {
  filteredColumns: Column<T>[];
  columnAlign: ColumnAlign[];
  columnMenuIndex: number | null;
  handleColumnMenu: (columnIndex: number) => void;
  setSort: (type: SortType, field: keyof T) => void;
};

export const TableHeader = <T,>({
  filteredColumns,
  columnAlign,
  columnMenuIndex,
  handleColumnMenu,
  setSort,
}: TableHeaderProps<T>) => {
  return (
    <Thead>
      <Tr>
        {filteredColumns.map(({ label, field }, columnIndex) => {
          const align = columnAlign[columnIndex];
          const columnMenuOpen = columnMenuIndex === columnIndex;
          const enabledTooltip = columnMenuIndex === null;
          const reverseDirectionColumnMenu = getReverseDirectionColumnMenu(
            filteredColumns.length,
            columnIndex
          );

          return (
            <Th
              align={align}
              label={label}
              onColumnMenu={() => handleColumnMenu(columnIndex)}
              columnMenuOpen={columnMenuOpen}
              enabledTooltip={enabledTooltip}
              reverseDirectionColumnMenu={reverseDirectionColumnMenu}
              onSort={(type) => setSort(type, field)}
            />
          );
        })}
      </Tr>
    </Thead>
  );
};
