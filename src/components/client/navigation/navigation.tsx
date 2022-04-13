import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNav, StyledNavLink } from "./navigation.styles";

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/movies">movies</StyledNavLink>
      <StyledNavLink to="/most-popular-movies">most popular</StyledNavLink>
      <StyledNavLink to="/favorite-movies">favorite movies</StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;
