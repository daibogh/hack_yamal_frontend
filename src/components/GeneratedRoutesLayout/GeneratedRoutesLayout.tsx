import React from 'react';
import { useGeneratedRoutes } from '../../hooks/api/use-generated-routes';
import { RouteCard } from '../RouteCard';
import style from './GeneratedRoutesLayout.module.scss';

interface GeneratedRoutesLayoutProps {
  className?: string;
}

const GeneratedRoutesLayout: React.FC<GeneratedRoutesLayoutProps> = ({
  className,
}) => {
  const generatedRoutes = useGeneratedRoutes();
  return (
    <div className={`${style.root} ${className}`}>
      <header>header</header>

      <div className={style.routesList}>
        {generatedRoutes.map((props, key) => (
          <RouteCard key={key} {...props} />
        ))}
      </div>
    </div>
  );
};

export default GeneratedRoutesLayout;
