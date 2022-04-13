import React from "react";

import { Container, Navigation } from "components";

export const PageRoute: React.FC<any> = ({
  component: Component,
  showNavigation,
}) => {
  if (showNavigation) {
    return (
      <Container>
        <Navigation />
        <Component />
      </Container>
    );
  }

  return (
    <Container>
      <Component />
    </Container>
  );
};
