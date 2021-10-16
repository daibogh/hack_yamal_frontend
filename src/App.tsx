import React from 'react';
import 'normalize.css';
import './App.css';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Switch, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRoutesConfig, GuardedRouteWithSubRoutes } from './conf/routes';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Theme preset={presetGpnDefault}>
        <BrowserRouter>
          <Switch>
            {useRoutesConfig().map((route, i) => {
              return <GuardedRouteWithSubRoutes key={i} route={route} />;
            })}
          </Switch>
        </BrowserRouter>
      </Theme>
    </QueryClientProvider>
  );
}

export default App;
