import { useQuery } from 'react-query';
import { getOverageVolumeStats } from '../../api/get-overage-volume-stats';
const comparedVolumeStats = {
  title: 'Общий спрос на топливо',
  current: {
    label: 'Данные за 2021 год',
    items: [
      { oilVolume: 1234 + 908, oilType: 'ДТ "А" ТУ' },
      { oilVolume: 868 + 658, oilType: 'ДТ "З" ГОСТ' },
      { oilVolume: 672 + 433, oilType: 'ДТ "А" ГОСТ' },
      { oilVolume: 491 + 390, oilType: 'ДТ "Л" ГОСТ' },
    ],
  },
  previous: {
    label: 'Данные за 2020 год',
    items: [
      { oilVolume: 1234, oilType: 'ДТ "А" ТУ' },
      { oilVolume: 868, oilType: 'ДТ "З" ГОСТ' },
      { oilVolume: 672, oilType: 'ДТ "А" ГОСТ' },
      { oilVolume: 491, oilType: 'ДТ "Л" ГОСТ' },
    ],
  },
};
const overageVolumeStats = {
  title: 'Спрос на топливо за август - сентябрь 2021',
  current: {
    label: 'Данные за 2021 год',
    items: [
      { oilVolume: 1234 + 908, oilType: 'ДТ "А" ТУ' },
      { oilVolume: 868 + 658, oilType: 'ДТ "З" ГОСТ' },
      { oilVolume: 672 + 433, oilType: 'ДТ "А" ГОСТ' },
      { oilVolume: 491 + 390, oilType: 'ДТ "Л" ГОСТ' },
    ],
  },
};
export const useOverageOilVolumeStats: () => {
  overageVolumeStats: {
    title: string;
    current: {
      label: string;
      items: { oilVolume: number; oilType: string }[];
    };
  };
  comparedVolumeStats: {
    title: string;
    current: {
      label: string;
      items: { oilVolume: number; oilType: string }[];
    };
    previous: {
      label: string;
      items: { oilVolume: number; oilType: string }[];
    };
  };
} = () => {
  const { data } = useQuery('OverageOilVolume', getOverageVolumeStats, {
    enabled: false,
  }); //TODO: 5) mock for overage volume stats query
  const hardcoded = {
    comparedVolumeStats,
    overageVolumeStats,
  };
  return data || hardcoded;
};
