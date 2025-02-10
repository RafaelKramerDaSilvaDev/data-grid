import { faker } from "@faker-js/faker";
import styled from "styled-components";
import { DataGridProvider } from "../lib/App";
import { MockDataModel } from "./models/mock-data-model";

const MOCK_DATA_QUANTITY = 1000;

export const Playground = () => {
  const mockData = Array.from({ length: MOCK_DATA_QUANTITY }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    phone: faker.phone.number({ style: "national" }),
    cpf: faker.string.numeric(11),
    salary: faker.number.int({ min: 1000, max: 10000 }),
    status: faker.number.int({ min: 0, max: 1 }),
  }));

  return (
    <Template>
      <DataGridProvider<MockDataModel>
        data={mockData}
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
  gap: 8px;

  padding: 16px;

  background-color: #f4f7f9;

  height: calc(100dvh - 32px);
`;
