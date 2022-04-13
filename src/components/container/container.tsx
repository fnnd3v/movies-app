import React from "react";

// import { Wrapper } from "./container.styles";

import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  width: 100%;
  padding-top: 50px;
  position: relative;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.white};
`;

export const Container: React.FC<any> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
