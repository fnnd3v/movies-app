import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 90%;
  height: 250px;
  margin: 20px 0;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainDarker};
  display: flex;
  position: relative;

  align-items: center;

  p {
    padding: 10px;
  }
`;

export const Poster = styled.img`
  height: 100%;
  max-width: 150px;

  ${({ theme }) => theme.mq.desktop} {
    height: 100%;
    max-width: 165px;
  }
`;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
`;
