import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";
import { Scrollbar } from "./scrollbar";

export const GlobalStyles = createGlobalStyle`
    ${Reset}
    ${Scrollbar}
`;
