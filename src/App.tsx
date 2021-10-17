import React from 'react';
import 'normalize.css';
import './App.css';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Switch, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRoutesConfig, GuardedRouteWithSubRoutes } from './conf/routes';
import axios from 'axios';
axios.defaults.baseURL = 'http://spacehub.su:8000';
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });
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
