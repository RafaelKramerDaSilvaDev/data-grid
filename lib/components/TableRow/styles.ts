import styled from "styled-components";

export const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;
