import React from 'react';
import style from './FutureDeliveries.module.scss';
import './FutureDeliveries.scss';
import { Card } from '@consta/uikit/Card';
import { Layout } from '@consta/uikit/LayoutCanary';
import { Header } from '@consta/uikit/Header';
import { Badge } from '@consta/uikit/Badge';
interface FutureDeliveriesProps {
  className?: string;
  items: DeliveryInstance[];
}
type DeliveryInstance = {
  oilType: string;
  dateCreated: string;
  amount: number;
  status: 'СОГЛАСОВАНА' | 'НОВАЯ';
};

const FutureDeliveries: React.FC<FutureDeliveriesProps> = ({
  className,
  items,
}) => {
  return (
    <Card className={`${style.root} ${className} FutureDeliveries`}>
      <div className={style.header}>
        <Header leftSide="Будущие поставки" />
      </div>
      <div className="FutureDeliveries_itemsContainer">
        <Layout direction="column">
          {items.map(({ oilType, dateCreated, amount, status }) => (
            <Layout>
              <Layout flex={1} direction="column">
                <div className={style.oilType}>{oilType}</div>
                <div className={style.createdDate}>{dateCreated}</div>
              </Layout>
              <Layout flex={1}>{amount} тонн</Layout>
              <Layout flex={1}>
                <Badge form="round" view="stroked" label={status} />
              </Layout>
            </Layout>
          ))}
        </Layout>
      </div>
    </Card>
  );
};

export default FutureDeliveries;
