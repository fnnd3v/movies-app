import React from "react";
import { Route, Routes } from "react-router-dom";

import { PageRoute, Providers } from "components";
import { routes } from "config";

const App = () => {
  return (
    <Providers>
      <Routes>
        {routes.map((route: any) => (
          <Route
            key={route.name}
            path={route.path}
            element={<PageRoute {...route} />}
          />
        ))}
      </Routes>
    </Providers>
  );
};

export default App;
