import styled from "styled-components";

import { Button } from "@mui/material";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 10px;
  margin: 0 auto;

  ${({ theme }) => theme.mq.desktop} {
    width: 95%;
    margin: 0 auto;
    max-width: 1400px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.ul`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 50px;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const StyledButton = styled(Button)`
  && {
    font-weight: 600;
    margin: 10px;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-family: "Montserrat";
  }
`;
