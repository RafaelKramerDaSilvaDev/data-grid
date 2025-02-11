import React from "react";
import * as S from "./styles";

type TableRowProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  dataIndex: number;
};

export const TableRow = ({ children, style, dataIndex }: TableRowProps) => {
  return (
    <S.TableRow style={style} data-index={dataIndex}>
      {children}
    </S.TableRow>
  );
};
