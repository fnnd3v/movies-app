import styled from "styled-components";

import FavoriteIconBlack from "assets/icons/favorite_movie_icon_black.svg";
import FavoriteIcon from "assets/icons/favorite_movie_icon.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  position: relative;
  align-items: center;
  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    overflow: auto;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.desktop} {
    width: 80%;
    padding: 20px 10% 0;
  }
`;

export const Backdrop = styled.div`
  position: relative;
  height: 230px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  img {
    height: 100%;
    opacity: 0.35;
    position: absolute;
  }

  h3 {
    text-align: center;
    font-size: 24px;
    padding: 0 10px;
    max-width: 75%;
    z-index: 9999;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 350px;
  }
`;

export const Overview = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
  padding: 30px;

  img {
    display: none;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 0 auto;
    display: flex;
    padding: 0;

    img {
      display: block;
      height: 350px;
    }

    p {
      margin-top: 10px;
      margin-left: 15px;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const StyledDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 30px;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
  }
`;

export const ReleaseDate = styled.div`
  margin: 10px 30px;
  display: flex;
  justify-content: space-between;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  z-index: 999999;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-weight: bold;
  }

  img {
    width: 65px;
    height: 65px;
    opacity: 0.45;
  }
`;

export const FavoriteMovie = styled.div<{ isFavorite: boolean }>`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  /* background-color: #fff; */
  z-index: 9999;
  background-image: url(${({ isFavorite }) => {
    return isFavorite ? FavoriteIcon : FavoriteIconBlack;
  }});

  ${({ theme }) => theme.mq.desktop} {
    right: 10%;
    top: 40px;
  }
`;
