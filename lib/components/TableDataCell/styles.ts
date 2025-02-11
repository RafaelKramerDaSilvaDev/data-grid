import styled from "styled-components";

type TableDataCellStyleProps = {
  $align: "left" | "right";
};

export const TableDataCell = styled.td<TableDataCellStyleProps>`
  text-align: ${({ $align }) => ($align ? $align : "left")};

  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray600};
  padding: 6px 8px;
`;
