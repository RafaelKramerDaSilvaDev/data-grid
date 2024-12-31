import React from 'react';
import * as S from './styles';

type TheadProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  children: React.ReactNode;
};

export const Thead = ({ children }: TheadProps) => {
  return <S.Thead>{children}</S.Thead>;
};
