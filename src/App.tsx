import styled from "styled-components";
import { DataGridProvider } from "../lib/App";
import { MockData } from "./constants/mock-data";
import { MockDataModel } from "./models/mock-data-model";

export const Playground = () => {
  return (
    <Template>
      <DataGridProvider<MockDataModel>
        data={MockData}
        columns={[
          { label: "Código", field: "id", type: "number" },
          { label: "Nome", field: "name", type: "string" },
          { label: "Telefone", field: "phone", type: "number", mask: "phone" },
          { label: "CPF", field: "cpf", type: "number", mask: "cpf" },
          { label: "Salário", field: "salary", type: "decimal" }, // type: "decimal" aplica mascará decimal automaticamente
          {
            label: "Status",
            field: "status",
            type: "string",
            // Exemplo usando máscara personalizada
            mask: ({ status }) => {
              if (status === 0) return "Processando";
              return "Finalizado";
            },
          },
        ]}
      />
    </Template>
  );
};

const Template = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  height: calc(100dvh - 32px);
  padding: 16px;

  background-color: #f4f7f9;
`;
