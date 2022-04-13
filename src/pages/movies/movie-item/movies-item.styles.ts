import styled from "styled-components";

export const StyledMovieItem = styled.li`
  display: flex;
  margin: 20px 10px;
  width: 100%;
  padding: 10px 0;

  border: 1px solid ${({ theme }) => theme.colors.mainDarker};

  img {
    width: 100px;
  }
`;

export const Rating = styled.div`
  display: flex;
  padding: 10px 0;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 20px;
      width: 20px;
    }
  }

  p {
    margin: 0 10px;
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: absolute;
    height: 100%;
    right: 50px;
    top: 0;

    div {
      font-size: ${({ theme }) => theme.fontSize.xl};
      margin-bottom: 10px;
    }
  }
`;

export const MovieDetails = styled.div`
  padding: 0 10px 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  h4 {
    margin-bottom: 5px;
  }

  span {
    font-weight: 300;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 20px;
  }
`;
