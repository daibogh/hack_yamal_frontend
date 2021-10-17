import React from 'react';
import { useGeneratedRoutes } from '../../hooks/api/use-generated-routes';
import { RouteCard } from '../RouteCard';
import { Toolbar } from '../Toolbar';
import style from './GeneratedRoutesLayout.module.scss';
import { useState } from 'react';
import { CityMaps } from '../../pages/adminPage/cityMaps';

interface GeneratedRoutesLayoutProps {
  className?: string;
}

const GeneratedRoutesLayout: React.FC<GeneratedRoutesLayoutProps> = ({
  className,
}) => {
  const generatedRoutes = useGeneratedRoutes();
  const [view, setView] = useState<'list' | 'map'>('map');
  return (
    <div className={`${style.root} ${className}`}>
      <Toolbar listViewEnabled view={view} setView={setView} />

      {view === 'list' && (
        <div className={style.routesList}>
          {generatedRoutes.map((props, key) => (
            <RouteCard key={key} {...props} />
          ))}
        </div>
      )}
      {view === 'map' && <CityMaps />}
    </div>
  );
};

export default GeneratedRoutesLayout;
