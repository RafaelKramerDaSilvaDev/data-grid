import styled from "styled-components";

export const Thead = styled.thead`
  cursor: pointer;

  tr {
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.black100};

    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  }
`;
