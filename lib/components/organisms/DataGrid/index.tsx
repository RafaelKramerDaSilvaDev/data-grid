import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { DataGridProps } from "../../../@types/data-grid-props";
import { ColumnGrouperId } from "../../../constants/column-grouper-id";
import { applyMask } from "../../../helpers/apply-mask";
import { getColumnAlign } from "../../../helpers/get-column-align";
import { useColumnFilter } from "../../../hooks/useColumnFilter";
import { useDataFilter } from "../../../hooks/useDataFilter";
import { Table } from "../../atoms/Table";
import { Tbody } from "../../atoms/Tbody";
import { Td } from "../../atoms/Td";
import { Tr } from "../../atoms/Tr";
import { Header } from "../../molecules/Header";
import { TableHeader } from "../../molecules/TableHeader";
import * as S from "./styles";

export const DataGrid = <T extends { id: number }>({
  data,
  columns,
}: DataGridProps<T>) => {
  const { filteredColumns } = useColumnFilter({ columns });
  const { filteredData, setSort } = useDataFilter({ data });

  const [columnGrouperLabels, setColumnGrouperLabels] = useState<string[]>([]);

  const columnAlign = getColumnAlign(filteredData, filteredColumns);

  const [columnMenuIndex, setColumnMenuIndex] = useState<null | number>(null);

  const handleColumnMenu = (columnIndex: number) => {
    if (columnIndex === columnMenuIndex) {
      setColumnMenuIndex(null);
    } else {
      setColumnMenuIndex(columnIndex);
    }
  };

  const checkLabelExists = (previousLabels: string[], currentLabel: string) => {
    return previousLabels.includes(currentLabel);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const label = event.active.id as string;
    const droppableId = event.over?.id;

    if (droppableId === ColumnGrouperId) {
      setColumnGrouperLabels((prev) => {
        const labelExists = checkLabelExists(prev, label);

        if (labelExists) return [...prev];

        return [...prev, label];
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <S.Scroll>
        <Header
          columnGrouperLabels={columnGrouperLabels}
          setColumnGrouperLabels={setColumnGrouperLabels}
        />

        <Table>
          <TableHeader
            filteredColumns={filteredColumns}
            columnAlign={columnAlign}
            columnMenuIndex={columnMenuIndex}
            handleColumnMenu={handleColumnMenu}
            setSort={setSort}
          />

          <Tbody>
            {filteredData.map((item) => {
              return (
                <Tr key={item.id}>
                  {filteredColumns.map(
                    ({ field, mask, digits, type }, columnIndex) => {
                      const align = columnAlign[columnIndex];
                      const value = item[field];
                      const maskedValue = applyMask<T>(
                        String(value),
                        item,
                        mask,
                        digits,
                        type
                      );
                      const key = `${item.id}-${String(field)}`;

                      return (
                        <Td key={key} align={align}>
                          {maskedValue}
                        </Td>
                      );
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
      </S.Scroll>
    </DndContext>
  );
};
