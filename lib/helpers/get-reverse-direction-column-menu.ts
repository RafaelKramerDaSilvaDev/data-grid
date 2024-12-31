export const getReverseDirectionColumnMenu = (
  columnsLength: number,
  columnIndex: number
) => {
  const lastColumnIndex = columnsLength - 1;
  const penultimateColumnIndex = columnsLength - 2;

  if (
    columnIndex === lastColumnIndex ||
    columnIndex === penultimateColumnIndex
  ) {
    return true;
  }
  return false;
};
