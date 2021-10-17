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
        fromToWay: 'Мыс Каменный - Обь-Се-Яха',
        status: 'в пути',
        path: [
          {
            type: 'разгрузка',
            lat: 69.097106,
            lon: 76.87626,
            name: 'Мыс Каменный',
            passed: true,
          }, //антипаюта
          {
            type: 'разгрузка',
            lat: 66.151575,
            lon: 72.410689,
            name: 'Обь-Антипаюта',
            passed: true,
          }, //нори
          {
            type: 'загрузка из матки',
            lat: 65.714648,
            lon: 82.41785,
            name: 'Обь-Се-Яха',
            passed: false,
          }, //красноселькуп
        ],
      },
      {
        boatInfo: {
          name: 'Старица-2',
          boatClass: '«М» 2,0 лёд 30',
          power: 1270,
          liftingCapacity: 1270,
          length: 82,
          width: 15,
          osadka: '1,34 / 2,07м пор/гр',
          liquidMeter: 'ВЖУ 100-1,6',
          swimmingDistrict: 'M',
        },
        fromToWay: 'Обь-Антипаюта - Обь-Се-Яха',
        status: 'в пути',
        path: [
          {
            type: 'разгрузка',
            lat: 69.097106,
            lon: 76.87626,
            name: 'Обь-Антипаюта',
            passed: true,
          }, //антипаюта
          {
            type: 'разгрузка',
            lat: 66.151575,
            lon: 72.410689,
            name: 'Антипаюта',
            passed: false,
          }, //нори
          {
            type: 'загрузка из матки',
            lat: 65.714648,
            lon: 82.41785,
            name: 'Обь-Се-Яха',
            passed: false,
          }, //красноселькуп
        ],
      },
      {
        boatInfo: {
          name: 'Пойма-2',
          boatClass: '«М» 2,0 лёд 30',
          power: 1270,
          liftingCapacity: 1270,
          length: 82,
          width: 15,
          osadka: '1,34 / 2,07м пор/гр',
          liquidMeter: 'ВЖУ 100-1,6',
          swimmingDistrict: 'M',
        },
        fromToWay: 'Обь-Кутопьюган - Обь-Ныда',
        status: 'стоит',
        path: [
          {
            type: 'разгрузка',
            lat: 69.097106,
            lon: 76.87626,
            name: 'Обь-Кутопьюган',
            passed: false,
          }, //антипаюта
          {
            type: 'разгрузка',
            lat: 66.151575,
            lon: 72.410689,
            name: 'Кутопьюган',
            passed: false,
          }, //нори
          {
            type: 'загрузка из матки',
            lat: 65.714648,
            lon: 82.41785,
            name: 'Обь-Ныда',
            passed: false,
          }, //красноселькуп
        ],
      },
    ]
  ); //TODO 3) add MOCK for future deliveries query
};
