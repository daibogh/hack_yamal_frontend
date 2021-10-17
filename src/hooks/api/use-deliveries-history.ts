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
  amount: number;
}
export const useDeliveriesHistory = () => {
  const { data: deliveryHistoryList } = useQuery(
    'DeliveryHistory',
    getDeliveryHistory,
    { enabled: true }
  ); //TODO: 4) mock for delivery history query
  const rows: DeliveryHistoryInstance[] = [
    {
      id: '1',
      date: '28 августа 2021',
      type: Type.DTATY,
      amount: 10,
    },
    {
      id: '2',

      date: '22 августа 2021',
      type: Type.DZGOST,
      amount: 40,
    },
    {
      id: '3',
      date: '10 августа 2021',
      type: Type.DTAGOST,
      amount: 13,
    },
    {
      id: '1',
      date: '5 августа 2021',
      type: Type.DTATY,
      amount: 10,
    },
    {
      id: '2',

      date: '4 августа 2021',
      type: Type.DZGOST,
      amount: 40,
    },
    {
      id: '3',
      date: '1 августа 2021',
      type: Type.DTAGOST,
      amount: 13,
    },
  ];
  return deliveryHistoryList;
};
