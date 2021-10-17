import Axios from 'axios';

export const getGeneratedRoutes = async () => {
  const { data } = await Axios.get('/api/generated/routes');
  return data;
};
