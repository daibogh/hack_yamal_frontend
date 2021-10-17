import Axios from 'axios';

export const getFutureDeliveries = async () => {
  const { data } = await Axios.get(
    '/api/requests/getFutureRequests?city=Салехард&limit=30'
  );
  return data;
};
