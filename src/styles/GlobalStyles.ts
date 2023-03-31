import {createGlobalStyle} from "styled-components";
import {fonts} from "./constants/fonts";

export const GlobalStyles = createGlobalStyle`
  ${fonts}

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    font-family: 'Poppins','Monserrat';
    color: ${({theme}) => theme.colors.black};
    border: none;
    outline: none;
    box-sizing: border-box;
  }
  
  body, main {
    overflow-x: hidden;
  }
  
  ul, ol {
    list-style: none;
  }

  main > section{
    margin: 100px 0;
  }

  main > section:nth-child(2){
    margin-top: 0;
  }

  main > section:last-child{
    margin-bottom: 0;
  }

  @media (min-width: 767px) {
    main > section{
      margin: 0;
    }

    main:nth-child(2){
      margin-top: 0;
    }

    main:last-child{
      margin-bottom: 0;
    }
  }
`