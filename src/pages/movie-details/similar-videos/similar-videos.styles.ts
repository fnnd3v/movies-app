import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.mq.desktop} {
    width: 30%;
    padding-top: 40px;
    height: 100%;
    transform: translateY(-40px);
    h4 {
      margin-bottom: 30px;
    }
  }
`;

export const StyledList = styled.ul`
  width: 80%;
  margin: 0 auto;
  list-style: none;
  scrollbar-color: yellow;

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

  ${({ theme }) => theme.mq.desktop} {
    overflow: auto;
    height: 80vh;
  }
`;

export const StyledItem = styled.li`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 70%;
  }

  p {
    margin-top: 10px;
    max-width: 50%;
  }

  ${({ theme }) => theme.mq.desktop} {
    img {
      width: 50%;
    }
  }
`;
