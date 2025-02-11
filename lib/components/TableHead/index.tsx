import React from "react";
import * as S from "./styles";

type TableHeadProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export const TableHead = React.forwardRef<
  HTMLTableSectionElement,
  TableHeadProps
>(({ children, style }, ref) => {
  return (
    <S.TableHead ref={ref} style={style}>
      {children}
    </S.TableHead>
  );
});
