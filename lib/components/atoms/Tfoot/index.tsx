import React from 'react';
import * as S from './styles';

type TfootProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  children: React.ReactNode;
};

export const Tfoot = ({ children }: TfootProps) => {
  return <S.Tfoot>{children}</S.Tfoot>;
};
