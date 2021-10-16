import { getFutureDeliveries } from '../../api/get-future-deliveries-list';
import { useQuery } from 'react-query';
type FutureDeliveryInstance = {
  oilType: string;
  dateCreated: string;
  amount: number;
  status: 'СОГЛАСОВАНА' | 'НОВАЯ';
};
export const useFutureDeliveriesList: () => FutureDeliveryInstance[] = () => {
  const { data: futureDeliveries } = useQuery(
    'future-deliveries',
    getFutureDeliveries,
    { enabled: false }
  );
  return (
    futureDeliveries || [
      {
        oilType: 'ДТ "А" ТУ',
        dateCreated: '10 сентября 2021',
        amount: 100,
        status: 'СОГЛАСОВАНА',
      },
      {
        oilType: 'ДТ "А" ГОСТ',
        dateCreated: '10 сентября 2021',
        amount: 200,
        status: 'СОГЛАСОВАНА',
      },
      {
        oilType: 'ДТ "Л" ГОСТ',
        dateCreated: '10 сентября 2021',
        amount: 120,
        status: 'СОГЛАСОВАНА',
      },
      {
        oilType: 'ДТ "А" ТУ',
        dateCreated: '10 сентября 2021',
        amount: 120,
        status: 'НОВАЯ',
      },
      {
        oilType: 'АИ-92-К5',
        dateCreated: '10 сентября 2021',
        amount: 110,
        status: 'НОВАЯ',
      },
      {
        oilType: 'ДТ “А” ТУ',
        dateCreated: '10 сентября 2021',
        amount: 180,
        status: 'НОВАЯ',
      },
    ]
  ); //TODO 3) add MOCK for future deliveries query
};
