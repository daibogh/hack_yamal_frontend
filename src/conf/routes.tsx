import React, { ComponentProps, useMemo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';
type RouteInstance = ComponentProps<typeof Route> & { auth?: boolean } & {
  routes?: RouteInstance[];
  needsAuth?: boolean;
  component: React.FC<any>;
};
export const useRoutesConfig: () => RouteInstance[] = () => {
  const isAuth = {
    producer: true,
    stakeholder: true,
  }; // TODO add fake auth
  return useMemo(
    () => [
      {
        path: '/',
        component: MainPage,
        routes: [
          {
            path: '/login',
            component: LoginPage,
            exact: true,
          },
          {
            path: '/producer',
            component: () => <>producer</>,
            needsAuth: true,
            exact: true,
            auth: isAuth.producer,
          },
          {
            path: '/stakeholder',
            component: () => <>stakeholder</>,
            needsAuth: true,
            exact: true,
            auth: isAuth.stakeholder,
          },
        ],
      },
    ],
    [isAuth]
  );
};
export const GuardedRouteWithSubRoutes: React.FC<{ route: RouteInstance }> = ({
  route: { routes, children, ...route },
}) => {
  const isNeededAuth = route.needsAuth;
  const isAuth = route.auth;
  return isNeededAuth && !isAuth ? (
    <Redirect to={{ pathname: '/login' }} />
  ) : (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        <route.component {...props}>
          {routes &&
            routes.map((route, i) => (
              <GuardedRouteWithSubRoutes key={i} route={route} />
            ))}
        </route.component>
      )}
    />
  );
};
