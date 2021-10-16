import React from 'react';
import style from './Layout.module.scss';
import { Layout as LayoutCanary } from '@consta/uikit/LayoutCanary';

interface LayoutProps {
  className?: string;
  direction?: 'row' | 'column';
  flex?: number;
  verticalAlign?: 'top' | 'bottom';
  horizontalAlign?: 'left' | 'right';
}

const Layout: React.FC<LayoutProps> = ({
  className,
  direction = 'row',
  flex,
  verticalAlign = 'top',
  horizontalAlign = 'left',
  children,
}) => {
  return (
    <LayoutCanary
      horizontalAlign={horizontalAlign}
      verticalAlign={verticalAlign}
      direction={direction}
      flex={flex}
      className={`${style.root} ${className}`}
    >
      {children}
    </LayoutCanary>
  );
};

export default Layout;
