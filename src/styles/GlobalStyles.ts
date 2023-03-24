import {createGlobalStyle} from "styled-components";
import {fonts} from "./constants/fonts";

export const GlobalStyles = createGlobalStyle`
  ${fonts}

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    font-family: 'Poppins';
    border: none;
    outline: none;
  }
  
  ul, ol {
    list-style: none;
  }
`