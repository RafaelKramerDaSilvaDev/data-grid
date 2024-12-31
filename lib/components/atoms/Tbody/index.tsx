import React from "react";
import * as S from "./styles";

type TbodyProps = {
  children: React.ReactNode;
};

export const Tbody = ({ children }: TbodyProps) => {
  return <S.Tbody>{children}</S.Tbody>;
};
