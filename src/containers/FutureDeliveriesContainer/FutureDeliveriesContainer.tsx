import React from 'react';
import { FutureDeliveries } from '../../components/FutureDeliveries';
import { useFutureDeliveriesList } from '../../hooks/api/use-future-deliveries-list';

interface FutureDeliveriesContainerProps {
  className?: string;
}

const FutureDeliveriesContainer: React.FC<FutureDeliveriesContainerProps> = ({
  className,
}) => {
  const futureDeliveriesList = useFutureDeliveriesList();
  return (
    <div className={className}>
      <FutureDeliveries items={futureDeliveriesList} />
    </div>
  );
};

export default FutureDeliveriesContainer;
