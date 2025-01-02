import { useDroppable } from "@dnd-kit/core";
import { IoMdClose } from "react-icons/io";
import { ColumnGrouperId } from "../../../constants/column-grouper-id";
import * as S from "./styles";

type ColumnGrouperProps = {
  labels: string[];
  setColumnGrouperLabels: (value: React.SetStateAction<string[]>) => void;
};

export const ColumnGrouper = ({
  labels,
  setColumnGrouperLabels,
}: ColumnGrouperProps) => {
  const { setNodeRef } = useDroppable({ id: ColumnGrouperId });

  const hasLabels = labels.length;

  const handleRemoveLabel = (labelToRemove: string) => {
    setColumnGrouperLabels((prevLabels) =>
      prevLabels.filter((label) => labelToRemove !== label)
    );
  };

  return (
    <S.Container ref={setNodeRef}>
      {hasLabels ? (
        <S.Wrapper>
          {labels.map((label) => (
            <S.Label>
              {label}

              <IoMdClose onClick={() => handleRemoveLabel(label)} />
            </S.Label>
          ))}
        </S.Wrapper>
      ) : (
        <S.Span>
          Arraste um cabeçalho da coluna e solte-o aqui para agrupar!
        </S.Span>
      )}
    </S.Container>
  );
};
