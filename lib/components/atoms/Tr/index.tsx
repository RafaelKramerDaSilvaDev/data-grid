import React from 'react';
import * as S from './styles';

type TrProps = React.HTMLAttributes<HTMLTableRowElement> & {
  children: React.ReactNode;
};

export const Tr = ({ children }: TrProps) => {
  return <S.Tr>{children}</S.Tr>;
};
