import styled from "styled-components";

export const Th = styled.th`
  position: relative;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Span = styled.span<{ $align: "left" | "right" }>`
  font-size: 12px;
  font-weight: 600;

  text-align: ${({ $align }) => ($align ? $align : "left")};
  color: ${({ theme }) => theme.colors.black100};

  padding: 8px;
  width: 100%;
`;

export const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;

  border: none;
  background-color: transparent;
  cursor: pointer;
`;