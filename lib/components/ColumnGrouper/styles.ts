import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  user-select: none;
`;

export const Span = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray600};

  padding-left: 8px;
  padding-right: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  gap: 4px;

  cursor: pointer;

  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray600};

  padding: 4px 8px;

  background-color: ${({ theme }) => theme.colors.gray};
  border: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
`;
