import { useMemo } from "react";
import { Column } from "../@types/column";

type UseColumnFilterProps<T> = {
  columns: Column<T>[];
};

export const useColumnFilter = <T>({ columns }: UseColumnFilterProps<T>) => {
  const memorizedColumns = useMemo(() => columns, [columns]);

  return { filteredColumns: memorizedColumns };
};
