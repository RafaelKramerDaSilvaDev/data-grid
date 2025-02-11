import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);

  background-color: ${({ theme }) => theme.colors.blueGray};
  padding: 4px;

  text-align: center;

  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};

  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent #7f8ca5 transparent;
  }
`;
