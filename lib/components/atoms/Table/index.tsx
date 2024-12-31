import React from "react";
import * as S from "./styles";

type TableProps = {
  children: React.ReactNode;
};

export const Table = ({ children }: TableProps) => {
  return (
    <S.Scroll>
      <S.Table>{children}</S.Table>
    </S.Scroll>
  );
};
