import React, { forwardRef } from "react";
import * as S from "./styles";

type TableBodyProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, style }, ref) => {
    return (
      <S.TableBody ref={ref} style={style}>
        {children}
      </S.TableBody>
    );
  }
);
