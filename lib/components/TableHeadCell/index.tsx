import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTheme } from "styled-components";
import { ColumnMenu } from "../ColumnMenu";
import { Tooltip } from "../Tooltip";
import * as S from "./styles";

type TableHeadCellProps = {
  label: string;
  align: "left" | "right";
  onColumnMenu: () => void;
  columnMenuOpen: boolean;
  enabledTooltip: boolean;
  reverseDirectionColumnMenu: boolean;
  onSort: (type: "ascend" | "descendant") => void;
  width?: number;
};

export const TableHeadCell = ({
  label,
  align,
  onColumnMenu,
  columnMenuOpen,
  enabledTooltip,
  reverseDirectionColumnMenu,
  onSort,
  width,
}: TableHeadCellProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: label,
    });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [hover, setHover] = useState(false);

  const { colors } = useTheme();

  const tooltipShow = hover && enabledTooltip && !isDragging;

  return (
    <S.TableHeadCell
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{ transform: CSS.Translate.toString(transform) }}
      $width={width}
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
    </S.TableHeadCell>
  );
};
