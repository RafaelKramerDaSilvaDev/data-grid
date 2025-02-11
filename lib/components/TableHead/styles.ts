import styled from "styled-components";

export const TableHead = styled.thead`
  cursor: pointer;

  tr {
    color: ${({ theme }) => theme.colors.black100};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  }
`;
