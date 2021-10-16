import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
export const useCurrentRoute = () => {
  const location = useLocation();
  const isStakeholder = useMemo(() => location.pathname === '/stakeholder', [
    location,
  ]);
  const isClient = useMemo(() => location.pathname === '/client', [location]);
  const isLogin = useMemo(() => location.pathname === '/login', [location]);
  console.log(location);
  return useMemo(
    () => ({
      isStakeholder,
      isClient,
      isLogin,
    }),
    [isStakeholder, isClient]
  );
};
