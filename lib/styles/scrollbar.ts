import { css } from "styled-components";

export const Scrollbar = css`
  ::-webkit-scrollbar {
    width: 18px;
    height: 18px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollbar};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.scrollbarHover};
  }
`;
