import React from 'react';
import { useOverageOilVolumeStats } from '../../hooks/api/use-overage-oil-volume-stats';
import { OverageOilVolume } from '../../components/OverageOilVolume';

interface OverageOilVolumeContainerProps {
  className?: string;
}

const OverageOilVolumeContainer: React.FC<OverageOilVolumeContainerProps> = ({
  className,
}) => {
  const {
    overageVolumeStats,
    comparedVolumeStats,
  } = useOverageOilVolumeStats();
  return (
    <div
      className={className}
      style={{
        padding: ' 28px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#ffffff',
        /* коробка */

        boxShadow: '0px 5px 8px rgba(0, 32, 51, 0.04)',
        borderRadius: 8,
      }}
    >
      <OverageOilVolume {...comparedVolumeStats} />
      <OverageOilVolume {...overageVolumeStats} />
    </div>
  );
};

export default OverageOilVolumeContainer;
