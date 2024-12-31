import { useState } from "react";

import { DataGridProps } from "../../../@types/data-grid-props";
import { applyMask } from "../../../helpers/apply-mask";
import { getColumnAlign } from "../../../helpers/get-column-align";
import { getReverseDirectionColumnMenu } from "../../../helpers/get-reverse-direction-column-menu";
import { useColumnFilter } from "../../../hooks/useColumnFilter";
import { useDataFilter } from "../../../hooks/useDataFilter";
import { Table } from "../../atoms/Table";
import { Tbody } from "../../atoms/Tbody";
import { Td } from "../../atoms/Td";
import { Th } from "../../atoms/Th";
import { Thead } from "../../atoms/Thead";
import { Tr } from "../../atoms/Tr";

export const DataGrid = <T,>({ data, columns }: DataGridProps<T>) => {
  const { filteredColumns } = useColumnFilter({ columns });
  const { filteredData, setSort } = useDataFilter({ data });

  const columnAlign = getColumnAlign(filteredData, filteredColumns);

  const [columnMenuIndex, setColumnMenuIndex] = useState<null | number>(null);

  const handleColumnMenu = (columnIndex: number) => {
    if (columnIndex === columnMenuIndex) {
      setColumnMenuIndex(null);
    } else {
      setColumnMenuIndex(columnIndex);
    }
  };

  return (
    <Table>
      <Thead>
        <Tr>
          {filteredColumns.map(({ label, field }, columnIndex) => {
            const align = columnAlign[columnIndex].align;
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

      <Tbody>
        {filteredData.map((item) => {
          return (
            <Tr>
              {filteredColumns.map(
                ({ field, mask, digits, type }, columnIndex) => {
                  const align = columnAlign[columnIndex].align;
                  const value = item[field];
                  const maskedValue = applyMask<T>(
                    String(value),
                    item,
                    mask,
                    digits,
                    type
                  );

                  return <Td align={align}>{maskedValue}</Td>;
                }
              )}
            </Tr>
          );
        })}
      </Tbody>

      {/* <Tfoot>
          <span>Tfoot</span>
        </Tfoot> */}
    </Table>
  );
};
