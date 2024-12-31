import { useState } from "react";

type UseDataFilterProps<T> = {
  data: T[];
};

export const useDataFilter = <T>({ data }: UseDataFilterProps<T>) => {
  const [filteredData, setFilteredData] = useState(data);

  const setSort = (type: "ascend" | "descendant", field: keyof T) => {
    const sortedData = [...data].sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];

      if (type === "ascend") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    setFilteredData(sortedData);
  };

  return { filteredData, setSort };
};