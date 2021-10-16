import Axios from 'axios';

export const getOverageVolumeStats = async () => {
  const { data } = await Axios.get('/api/Volume/stats');
  return data;
};
