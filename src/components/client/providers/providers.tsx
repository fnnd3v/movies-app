import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "assets/styles/theme";
import { GlobalStyle } from "assets/styles/global-style";

interface Props {
  children: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          {children}
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
};
