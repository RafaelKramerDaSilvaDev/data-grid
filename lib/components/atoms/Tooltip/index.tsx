import * as S from "./styles";

type TooltipProps = {
  label: string;
  show: boolean;
};

export const Tooltip = ({ label, show }: TooltipProps) => {
  if (!show) return null;

  return <S.Container>{label}</S.Container>;
};
