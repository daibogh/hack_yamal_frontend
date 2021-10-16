import React from 'react';
import style from './LeftColumn.module.scss';
import { useCurrentRoute } from '../../hooks/use-current-route';
import { Layout } from '../Layout';
import { DateTimeContainer } from '../../containers/DateTimeContainer';
import { FutureDeliveriesContainer } from '../../containers/FutureDeliveriesContainer';
import { Grid } from '@consta/uikit/Grid';
interface LeftColumnProps {
  className?: string;
}

const LeftColumn: React.FC<LeftColumnProps> = ({ className }) => {
  const { isStakeholder, isClient } = useCurrentRoute();
  return (
    <div className={`${style.root} ${className}`}>
      {isStakeholder && <>map</>}
      {isClient && (
        <>
          <div>
            <DateTimeContainer />
          </div>
          <div>
            <FutureDeliveriesContainer className={style.futureDeliveryBlock} />
          </div>
        </>
      )}
    </div>
  );
};

export default LeftColumn;
