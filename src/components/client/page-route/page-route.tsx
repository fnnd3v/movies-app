import { Container } from "components/container/container";
import React from "react";

import Navigation from "../navigation/navigation";

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
