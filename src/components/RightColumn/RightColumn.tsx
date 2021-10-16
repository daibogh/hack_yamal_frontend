import React from 'react';
import { OverageOilVolumeContainer } from '../../containers/OverageOilVolumeContainer';
import { useCurrentRoute } from '../../hooks/use-current-route';
import { HistoryPart } from '../../pages/historyPart';
import style from './RightColumn.module.scss';

interface RightColumnProps {
  className?: string;
}

const RightColumn: React.FC<RightColumnProps> = ({ className }) => {
  const { isStakeholder, isClient } = useCurrentRoute();
  return (
    <div className={`${style.root} ${className}`}>
      {isStakeholder && <OverageOilVolumeContainer />}
      {isClient && (
        <div>
          <HistoryPart />
        </div>
      )}
    </div>
  );
};

export default RightColumn;
