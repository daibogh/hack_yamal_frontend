import { Layout } from '@consta/uikit/LayoutCanary';
import React, { useMemo } from 'react';
import style from './MainLayout.module.scss';
import { AppHeader } from '../AppHeader';
import { useCurrentRoute } from '../../hooks/use-current-route';
import { LeftColumn } from '../LeftColumn';
import { RightColumn } from '../RightColumn';
import { GeneratedRoutesLayout } from '../GeneratedRoutesLayout';

interface MainLayoutProps {
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ className }) => {
  const {
    isClient,
    isStakeholder,
    isLogin,
    isStakeholderRoutes,
  } = useCurrentRoute();

  const [col1Size, col2size] = useMemo(
    () => (isStakeholder ? [1, 1] : isClient ? [2, 3] : [1, 1]),
    [isStakeholder, isClient]
  );
  return isLogin ? null : (
    <div className={style.root}>
      <>
        <AppHeader className={style.header} />

        {isStakeholderRoutes ? (
          <GeneratedRoutesLayout />
        ) : (
          <Layout>
            <Layout flex={col1Size}>
              {/* <div style={{ width: '100%', border: '1px solid red' }}></div> */}
              <LeftColumn />
            </Layout>
            <Layout flex={col2size}>
              <RightColumn />
            </Layout>
          </Layout>
        )}
      </>
    </div>
  );
};

export default MainLayout;
