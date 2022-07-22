import { createGlobalStyle } from "styled-components";

export const CLOCK_SIZE = 50;

const GlobalStyle = createGlobalStyle`
    *
    {
        box-sizing: border-box;
        background-color: #eee;
    }
`;

export default GlobalStyle;