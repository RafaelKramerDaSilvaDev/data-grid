import { Column } from './column';

export type DataGridProps<T> = {
  data: T[];
  columns: Column<T>[];
};
