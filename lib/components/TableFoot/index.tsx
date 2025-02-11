import React from "react";
import * as S from "./styles";

type TableFootProps = {
  children?: React.ReactNode;
};

export const TableFoot = ({ children }: TableFootProps) => {
  return <S.TableFoot>{children}</S.TableFoot>;
};
