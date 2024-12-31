import styled from "styled-components";

export const Table = styled.table`
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  max-height: 200px;
`;

export const Scroll = styled.main`
  overflow: auto;

  height: 500px;
`;
