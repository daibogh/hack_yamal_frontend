import { useQuery } from 'react-query';
import { ComponentProps } from 'react';
import { RouteCard } from '../../components/RouteCard';
import { getGeneratedRoutes } from '../../api/get-generated-routes-list';

export const useGeneratedRoutes: () => ComponentProps<
  typeof RouteCard
>[] = () => {
  const { data } = useQuery('generated-routes', getGeneratedRoutes, {
    enabled: false,
  });
  return (
    data || [
      {
        boatInfo: {
          name: 'Урал',
          boatClass: '«М» 2,0 лёд 30',
          power: 1270,
          liftingCapacity: 1270,
          length: 82,
          width: 15,
          osadka: '1,34 / 2,07м пор/гр',
          liquidMeter: 'ВЖУ 100-1,6',
          swimmingDistrict: 'M',
        },
        fromToWay: 'Лопхари - Салехард',
        status: 'в пути',
        path: [
          {
            type: 'разгрузка',
            lat: 69.097106,
            lon: 76.87626,
            name: 'Антипаюта',
            passed: true,
          }, //антипаюта
          {
            type: 'разгрузка',
            lat: 66.151575,
            lon: 72.410689,
            name: 'Нори',
            passed: true,
          }, //нори
          {
            type: 'загрузка из матки',
            lat: 65.714648,
            lon: 82.41785,
            name: 'Красноселькуп',
            passed: false,
          }, //красноселькуп
          {
            type: 'разгрузка',
            lat: 66.856091,
            lon: 70.851278,
            name: 'Яр-сале',
            passed: false,
          }, //яр-сале
          {
            type: 'разгрузка',
            lat: 70.165418,
            lon: 72.497573,
            name: 'Сеяха',
            passed: false,
          }, //сеяха
        ],
      },
      {
        boatInfo: {
          name: 'Урал',
          boatClass: '«М» 2,0 лёд 30',
          power: 1270,
          liftingCapacity: 1270,
          length: 82,
          width: 15,
          osadka: '1,34 / 2,07м пор/гр',
          liquidMeter: 'ВЖУ 100-1,6',
          swimmingDistrict: 'M',
        },
        fromToWay: 'Лопхари - Салехард',
        status: 'в пути',
        path: [
          {
            type: 'разгрузка',
            lat: 69.097106,
            lon: 76.87626,
            name: 'Антипаюта',
            passed: true,
          }, //антипаюта
          {
            type: 'разгрузка',
            lat: 66.151575,
            lon: 72.410689,
            name: 'Нори',
            passed: true,
          }, //нори
          {
            type: 'загрузка из матки',
            lat: 65.714648,
            lon: 82.41785,
            name: 'Красноселькуп',
            passed: false,
          }, //красноселькуп
          {
            type: 'разгрузка',
            lat: 66.856091,
            lon: 70.851278,
            name: 'Яр-сале',
            passed: false,
          }, //яр-сале
          {
            type: 'разгрузка',
            lat: 70.165418,
            lon: 72.497573,
            name: 'Сеяха',
            passed: false,
          }, //сеяха
        ],
      },
      {
        boatInfo: {
          name: 'Урал',
          boatClass: '«М» 2,0 лёд 30',
          power: 1270,
          liftingCapacity: 1270,
          length: 82,
          width: 15,
          osadka: '1,34 / 2,07м пор/гр',
          liquidMeter: 'ВЖУ 100-1,6',
          swimmingDistrict: 'M',
        },
        fromToWay: 'Лопхари - Салехард',
        status: 'в пути',
        path: [
          {
            type: 'разгрузка',
            lat: 69.097106,
            lon: 76.87626,
            name: 'Антипаюта',
            passed: true,
          }, //антипаюта
          {
            type: 'разгрузка',
            lat: 66.151575,
            lon: 72.410689,
            name: 'Нори',
            passed: true,
          }, //нори
          {
            type: 'загрузка из матки',
            lat: 65.714648,
            lon: 82.41785,
            name: 'Красноселькуп',
            passed: false,
          }, //красноселькуп
          {
            type: 'разгрузка',
            lat: 66.856091,
            lon: 70.851278,
            name: 'Яр-сале',
            passed: false,
          }, //яр-сале
          {
            type: 'разгрузка',
            lat: 70.165418,
            lon: 72.497573,
            name: 'Сеяха',
            passed: false,
          }, //сеяха
        ],
      },
    ]
  ); //TODO 3) add MOCK for future deliveries query
};
