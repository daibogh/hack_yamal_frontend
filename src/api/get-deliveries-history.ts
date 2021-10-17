import Axios from 'axios';

export const getDeliveryHistory = async () => {
  const { data } = await Axios.get(
    '/api/requests/getPastRequests?city=Салехард&limit=15'
  );
  return data;
};
