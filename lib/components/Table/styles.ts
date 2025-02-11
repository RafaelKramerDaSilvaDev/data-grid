import styled from "styled-components";

export const Table = styled.table`
  border: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
  width: 100%;
  table-layout: fixed;
`;
