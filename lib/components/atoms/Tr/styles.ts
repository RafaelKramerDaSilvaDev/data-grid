import styled from "styled-components";

export const Tr = styled.tr`
  padding: 2px 4px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;
