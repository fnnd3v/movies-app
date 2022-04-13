import React from "react";

import { Providers } from "components";
import { Route, Routes } from "react-router-dom";
import { routes } from "config/routes.config";
import { PageRoute } from "components/client/page-route/page-route";

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
