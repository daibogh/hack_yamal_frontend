import Axios from 'axios';

export const getOverageVolumeStats = async () => {
  const { data } = await Axios.get(
    '/api/requests/getRequestsStatistics?city=Салехард'
  );
  return data;
};
