import styled from "styled-components";

export const Container = styled.div<{ $reverseDirection: boolean }>`
  position: absolute;
  top: 28px;
  left: ${({ $reverseDirection }) => {
    if (!$reverseDirection) return "calc(100% - 16px)";
  }};
  right: ${({ $reverseDirection }) => {
    if ($reverseDirection) return 0;
  }};

  display: flex;
  flex-direction: column;

  width: 200px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;

  padding: 8px;

  border: 1px solid ${({ theme }) => theme.colors.gray200};

  cursor: pointer;
  user-select: none;

  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black100};

  &:hover {
    filter: contrast(90%);
  }
`;
