export const getReverseDirectionColumnMenu = (
  columnsLength: number,
  columnIndex: number
) => {
  const lastColumnIndex = columnsLength - 1;
  const penultimateColumnIndex = columnsLength - 2;

  return (
    columnIndex === lastColumnIndex || columnIndex === penultimateColumnIndex
  );
};
