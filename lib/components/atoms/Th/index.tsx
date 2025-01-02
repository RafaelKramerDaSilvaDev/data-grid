import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTheme } from "styled-components";
import { ColumnMenu } from "../../molecules/ColumnMenu";
import { Tooltip } from "../Tooltip";
import * as S from "./styles";

type ThProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement> & {
  label: string;
  align: "left" | "right";
  onColumnMenu: () => void;
  columnMenuOpen: boolean;
  enabledTooltip: boolean;
  reverseDirectionColumnMenu: boolean;
  onSort: (type: "ascend" | "descendant") => void;
};

export const Th = ({
  label,
  align,
  onColumnMenu,
  columnMenuOpen,
  enabledTooltip,
  reverseDirectionColumnMenu,
  onSort,
}: ThProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: label,
    });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [hover, setHover] = useState(false);

  const { colors } = useTheme();

  const tooltipShow = hover && enabledTooltip && !isDragging;

  return (
    <S.Th
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{ transform: CSS.Translate.toString(transform) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <S.Flex>
        <S.Span $align={align}>{label}</S.Span>

        {/* TODO: Devido a @dnd-kit o botão não é mais clicável */}
        <S.ArrowButton ref={buttonRef} onClick={onColumnMenu}>
          <IoIosArrowDown color={colors.gray600} fontSize={12} />
        </S.ArrowButton>
      </S.Flex>

      <ColumnMenu
        open={columnMenuOpen}
        reverseDirection={reverseDirectionColumnMenu}
        onSort={onSort}
        onClose={onColumnMenu}
        buttonRef={buttonRef}
      />

      <Tooltip label={label} show={tooltipShow} />
    </S.Th>
  );
};
