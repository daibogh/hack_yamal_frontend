import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
export const useCurrentRoute = () => {
  const location = useLocation();
  const isStakeholder = useMemo(() => location.pathname === '/stakeholder', [
    location,
  ]);
  const isStakeholderRoutes = useMemo(
    () => location.pathname === '/stakeholder/routes',
    [location]
  );
  const isClient = useMemo(() => location.pathname === '/client', [location]);
  const isLogin = useMemo(() => location.pathname === '/login', [location]);
  console.log(location);
  return useMemo(
    () => ({
      isStakeholder,
      isClient,
      isLogin,
      isStakeholderRoutes,
    }),
    [isStakeholder, isClient, isStakeholderRoutes, isLogin]
  );
};
