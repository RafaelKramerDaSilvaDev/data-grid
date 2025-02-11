import { DndContext, DragEndEvent } from "@dnd-kit/core";
import React, { useState } from "react";
import { TableVirtuoso } from "react-virtuoso";
import { DataGridProps } from "../../@types/data-grid-props";
import { ColumnGrouperId } from "../../constants/column-grouper-id";
import { getColumnAlign } from "../../helpers/get-column-align";
import { useColumnFilter } from "../../hooks/useColumnFilter";
import { useDataFilter } from "../../hooks/useDataFilter";
import { Header } from "../Header";
import { Table } from "../Table";
import { TableBody } from "../TableBody";
import { TableBodyPresenter } from "../TableBodyPresenter";
import { TableHead } from "../TableHead";
import { TableHeadPresenter } from "../TableHeadPresenter";
import { TableRow } from "../TableRow";
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
      <S.Container>
        <Header
          columnGrouperLabels={columnGrouperLabels}
          setColumnGrouperLabels={setColumnGrouperLabels}
        />

        <TableVirtuoso
          data={filteredData}
          components={{
            Table,
            TableBody,
            TableHead: React.forwardRef<
              HTMLTableSectionElement,
              { children?: React.ReactNode; style?: React.CSSProperties }
            >((props, ref) => (
              <TableHead ref={ref} style={props.style}>
                {props.children}
              </TableHead>
            )),
            TableRow: (props) => (
              <TableRow style={props.style} dataIndex={props["data-index"]}>
                {props.children}
              </TableRow>
            ),
          }}
          fixedHeaderContent={() => (
            <TableHeadPresenter
              filteredColumns={filteredColumns}
              columnAlign={columnAlign}
              columnMenuIndex={columnMenuIndex}
              handleColumnMenu={handleColumnMenu}
              setSort={setSort}
            />
          )}
          itemContent={(_, item) => (
            <TableBodyPresenter
              filteredColumns={filteredColumns}
              columnAlign={columnAlign}
              item={item}
            />
          )}
        />
      </S.Container>
    </DndContext>
  );
};
