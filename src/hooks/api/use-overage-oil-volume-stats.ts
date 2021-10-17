import { useQuery } from 'react-query';
import { getOverageVolumeStats } from '../../api/get-overage-volume-stats';
const comparedVolumeStats = {
  title: 'Общий спрос на топливо',
  current: {
    label: 'Данные за 2021 год',
    items: [
      { volume: 1234 + 908, type: 'ДТ "А" ТУ' },
      { volume: 868 + 658, type: 'ДТ "З" ГОСТ' },
      { volume: 672 + 433, type: 'ДТ "А" ГОСТ' },
      { volume: 491 + 390, type: 'ДТ "Л" ГОСТ' },
    ],
  },
  previous: {
    label: 'Данные за 2020 год',
    items: [
      { volume: 1234, type: 'ДТ "А" ТУ' },
      { volume: 868, type: 'ДТ "З" ГОСТ' },
      { volume: 672, type: 'ДТ "А" ГОСТ' },
      { volume: 491, type: 'ДТ "Л" ГОСТ' },
    ],
  },
};
const overageVolumeStats = {
  title: 'Спрос на топливо за август - сентябрь 2021',
  current: {
    label: 'Данные за 2021 год',
    items: [
      { volume: 1234 + 908, type: 'ДТ "А" ТУ' },
      { volume: 868 + 658, type: 'ДТ "З" ГОСТ' },
      { volume: 672 + 433, type: 'ДТ "А" ГОСТ' },
      { volume: 491 + 390, type: 'ДТ "Л" ГОСТ' },
    ],
  },
};
export const useOverageOilVolumeStats: () => {
  overageVolumeStats: {
    title: string;
    current: {
      label: string;
      items: { volume: number; type: string }[];
    };
  };
  comparedVolumeStats: {
    title: string;
    current: {
      label: string;
      items: { volume: number; type: string }[];
    };
    previous: {
      label: string;
      items: { volume: number; type: string }[];
    };
  };
} = () => {
  const { data } = useQuery('OverageOilVolume', getOverageVolumeStats, {
    enabled: true,
  }); //TODO: 5) mock for overage volume stats query
  const hardcoded = {
    comparedVolumeStats,
    overageVolumeStats,
  };
  const result = {
    comparedVolumeStats: {
      title: 'Общий спрос на топливо',
      current: data.current_year,
      previous: data.previous_year,
    },
    overageVolumeStats: {
      title: 'Спрос на топливо за август - сентябрь 2021',
      current: data.current_year,
    },
  };
  return result || hardcoded;
};
