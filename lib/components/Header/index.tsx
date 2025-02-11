import React from "react";
import { ColumnGrouper } from "../ColumnGrouper";
import * as S from "./styles";

type HeaderProps = {
  columnGrouperLabels: string[];
  setColumnGrouperLabels: (value: React.SetStateAction<string[]>) => void;
};

export const Header = ({
  columnGrouperLabels,
  setColumnGrouperLabels,
}: HeaderProps) => {
  return (
    <S.Container>
      <ColumnGrouper
        labels={columnGrouperLabels}
        setColumnGrouperLabels={setColumnGrouperLabels}
      />
    </S.Container>
  );
};
