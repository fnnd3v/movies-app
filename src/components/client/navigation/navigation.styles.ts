import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  position: fixed;
  height: 50px;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.colors.main};
  z-index: 99999;
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 1);
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mq.desktop} {
    justify-content: center;
  }
`;

export const StyledNavLink = styled(NavLink)`
  height: 90%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.m};

  ${({ theme }) => theme.mq.desktop} {
    padding: 0 50px;
  }
`;
