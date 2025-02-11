import React from "react";
import * as S from "./styles";

type TableDataCellProps = {
  children?: React.ReactNode;
  align: "left" | "right";
};

export const TableDataCell = ({ align, ...props }: TableDataCellProps) => {
  return <S.TableDataCell $align={align} {...props} />;
};
