import Axios from 'axios';

export const getFutureDeliveries = async () => {
  const { data } = await Axios.get('/api/future');
  return data;
};
