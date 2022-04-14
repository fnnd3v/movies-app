import styled from "styled-components";

export const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
    margin: 0 auto;
  }
`;
