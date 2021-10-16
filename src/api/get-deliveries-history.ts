import Axios from 'axios';

export const getDeliveryHistory = async () => {
  const { data } = await Axios.get('/api/delivery/history');
  return data;
};
