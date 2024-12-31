import styled from "styled-components";

type TdStyleProps = {
  $align: "left" | "right";
};

export const Td = styled.td<TdStyleProps>`
  text-align: ${({ $align }) => ($align ? $align : "left")};

  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray600};

  padding: 8px;
`;
