import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  
  body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;   
    margin: 0;
    padding: 0;

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}

}
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
