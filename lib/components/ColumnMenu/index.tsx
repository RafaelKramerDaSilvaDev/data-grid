import {
  FaFilter,
  FaSortAmountDown,
  FaSortAmountDownAlt,
} from "react-icons/fa";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";

import React from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import * as S from "./styles";

type ColumnMenuProps = {
  open: boolean;
  reverseDirection: boolean;
  onSort: (type: "ascend" | "descendant") => void;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
};

export const ColumnMenu = ({
  open,
  reverseDirection,
  onSort,
  onClose,
  buttonRef,
}: ColumnMenuProps) => {
  const { ref } = useClickOutside<HTMLDivElement>({
    onClickOutside: onClose,
    excludeRefs: [buttonRef],
  });

  if (!open) return null;

  return (
    <S.Container ref={ref} $reverseDirection={reverseDirection}>
      <S.Button onClick={() => onSort("ascend")}>
        <FaSortAmountDownAlt />
        Ordem Ascendente
      </S.Button>

      <S.Button onClick={() => onSort("descendant")}>
        <FaSortAmountDown />
        Ordem Descendente
      </S.Button>

      <S.Button>
        <TfiLayoutColumn3Alt />
        Colunas
      </S.Button>

      <S.Button>
        <FaFilter />
        Filtro
      </S.Button>
    </S.Container>
  );
};
