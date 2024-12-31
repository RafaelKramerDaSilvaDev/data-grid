import { ThemeProvider } from "styled-components";
import { DataGridProps } from "./@types/data-grid-props";
import { DataGrid } from "./components/organisms/DataGrid";
import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme/theme";

export const DataGridProvider = <T,>(props: DataGridProps<T>) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <DataGrid {...props} />
    </ThemeProvider>
  );
};
