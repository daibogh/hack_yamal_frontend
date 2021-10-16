import { useQuery } from 'react-query';
import { getDeliveryHistory } from '../../api/get-deliveries-history';
enum Type {
  DTATY = 'ДТ "А" ТУ',
  DZGOST = 'ДТ "З" ГОСТ',
  DTAGOST = 'ДТ "А" ГОСТ',
}
interface DeliveryHistoryInstance {
  id: string;

  date: string;
  type: Type;
  count: number;
}
export const useDeliveriesHistory = () => {
  const { data: deliveryHistoryList } = useQuery(
    'DeliveryHistory',
    getDeliveryHistory,
    { enabled: false }
  ); //TODO: 4) mock for delivery history query
  const rows: DeliveryHistoryInstance[] = [
    {
      id: '1',
      date: '28 августа 2021',
      type: Type.DTATY,
      count: 10,
    },
    {
      id: '2',

      date: '22 августа 2021',
      type: Type.DZGOST,
      count: 40,
    },
    {
      id: '3',
      date: '10 августа 2021',
      type: Type.DTAGOST,
      count: 13,
    },
  ];
  return deliveryHistoryList || rows;
};
