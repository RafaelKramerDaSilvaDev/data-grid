import React from 'react';
import * as S from './styles';

type TdProps = React.TdHTMLAttributes<HTMLTableDataCellElement> & {
  children: React.ReactNode;
  align: 'left' | 'right';
};

export const Td = ({ children, align }: TdProps) => {
  return <S.Td $align={align}>{children}</S.Td>;
};
