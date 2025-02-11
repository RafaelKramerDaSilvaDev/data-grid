import { faker } from "@faker-js/faker";
import styled from "styled-components";
import { DataGridProvider } from "../lib/App";

const mockData = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: faker.person.fullName(),
  phone: faker.phone.number({ style: "national" }),
  cpf: faker.string.numeric(11),
  salary: faker.number.int({ min: 1000, max: 10000 }),
  status: faker.number.int({ min: 0, max: 1 }),
}));

interface MockDataModel {
  id: number;
  name: string;
  phone: string;
  cpf: string;
  salary: number;
  status: number;
}

export const Playground = () => {
  return (
    <Template>
      <DataGridProvider<MockDataModel>
        data={mockData}
        columns={[
          {
            label: "Código",
            field: "id",
            type: "number",
            width: 120,
          },
          {
            label: "Nome",
            field: "name",
            type: "string",
          },
          {
            label: "Telefone",
            field: "phone",
            type: "number",
            mask: "phone",
            width: 120,
          },
          {
            label: "CPF",
            field: "cpf",
            type: "number",
            mask: "cpf",
            width: 120,
          },
          {
            label: "Salário",
            field: "salary",
            type: "decimal", // type: "decimal" aplica mascará decimal automaticamente
            width: 120,
          },
          {
            label: "Status",
            field: "status",
            type: "string",
            // Exemplo usando máscara personalizada
            mask: ({ status }) => {
              if (status === 0) return "Processando";
              return "Finalizado";
            },
            width: 120,
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
