import styled from "styled-components";

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
  img {
    height: 100%;
  }

  p {
    display: none;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    img {
      height: 450px;
      width: 100%;
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
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-right: 5px;
      width: 20px;
      height: 20px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    justify-content: space-around;
    p {
      text-align: center;
    }
  }
`;

export const MovieDetails = styled.div``;
