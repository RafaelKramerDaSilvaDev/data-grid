import React from "react";
import * as S from "./styles";

type TableProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export const Table = ({ children, style }: TableProps) => {
  return <S.Table style={style}>{children}</S.Table>;
};
