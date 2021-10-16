import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Switch, BrowserRouter } from 'react-router-dom';
import { useRoutesConfig, GuardedRouteWithSubRoutes } from './conf/routes';

function App() {
  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <Switch>
          {useRoutesConfig().map((route, i) => {
            return <GuardedRouteWithSubRoutes key={i} route={route} />;
          })}
        </Switch>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
