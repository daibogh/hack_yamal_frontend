import React, { useCallback } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useRoutesConfig, GuardedRouteWithSubRoutes } from './conf/routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {useRoutesConfig().map((route, i) => {
          return <GuardedRouteWithSubRoutes key={i} route={route} />;
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
