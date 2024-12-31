import { Masks } from './masks';

export type ColumnMask<T> = ((values: T) => string) | Masks;
