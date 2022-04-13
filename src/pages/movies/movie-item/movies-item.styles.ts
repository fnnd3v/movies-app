import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledMovieItem = styled.li`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  margin: 20px 0;
  border: 1px solid ${({ theme }) => theme.colors.mainDarker};
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.softGrey};
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 22%;
    margin: 20px 10px;
    height: 610px;
    flex-direction: column;
    min-width: 300px;
  }
`;

export const StyledPoster = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    height: 100%;
    width: 130px;
  }

  p {
    opacity: 0;
    position: absolute;
    bottom: 0;
    padding: 10px;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    img {
      height: 450px;
      width: 100%;
      transition: opacity 0.2s;
    }

    p {
      transition: opacity 0.2s;
    }

    &:hover {
      img {
        opacity: 0.2;
      }
      p {
        opacity: 1;
      }
    }
  }
`;

export const AboutInfo = styled.div`
  height: 100%;
  width: 60%;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => theme.mq.desktop} {
    align-items: center;
    width: 90%;
  }
`;

export const Rating = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  p {
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-right: 5px;
      width: 25px;
      height: 25px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    justify-content: space-around;
  }
`;

export const StyledLink = styled(Link)`
  color: unset;
  text-decoration: none;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  margin: 20px 0;
  border: 1px solid ${({ theme }) => theme.colors.mainDarker};
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.softGrey};
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 22%;
    margin: 20px 10px;
    height: 610px;
    flex-direction: column;
    min-width: 300px;
  }
`;
