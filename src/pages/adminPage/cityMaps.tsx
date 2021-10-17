import React from 'react';
import { GeoEventModel, Map } from '../../components/mapLibrary/components/map';
import { Placemark } from '../../components/mapLibrary/components/placemark';

import './cityMaps.scss';

const mapState: ymaps.MapState = {
  center: [69.148271, 77.100097],
  zoom: 5,
  controls: ['zoomControl'],
};

const placemarksConst: GeoEventModel[] = [
  {
    id: 0,
    lat: 69.097106,
    lon: 76.87626,
    name: 'Антипаюта',
    fuels: [
      { weight: 10, name: 'ДТ "A" ТУ' },
      { name: 'АИ-92-К5', weight: 20 },
      { name: 'ДТ "А" ГОСТ', weight: 25 },
    ],
  }, //антипаюта
  {
    id: 1,
    lat: 66.151575,
    lon: 72.410689,
    name: 'Нори',
    fuels: [{ weight: 10, name: 'ДТ "A" ТУ' }],
  }, //нори
  {
    id: 2,
    lat: 65.714648,
    lon: 82.41785,
    name: 'Красноселькуп',
    fuels: [{ weight: 10, name: 'ДТ "A" ТУ' }],
  }, //красноселькуп
  {
    id: 3,
    lat: 66.856091,
    lon: 70.851278,
    name: 'Яр-сале',
    fuels: [
      { weight: 10, name: 'ДТ "A" ТУ' },
      { name: 'ДТ "А" ГОСТ', weight: 25 },
    ],
  }, //яр-сале
  {
    id: 4,
    lat: 70.165418,
    lon: 72.497573,
    name: 'Сеяха',
    fuels: [{ weight: 10, name: 'ДТ "A" ТУ' }],
  }, //сеяха
  {
    id: 5,
    lon: 65.754325,
    lat: 64.983271,
    name: 'Лопхари',
    fuels: [
      { weight: 10, name: 'ДТ "A" ТУ' },
      { name: 'ДТ "А" ГОСТ', weight: 25 },
    ],
  },
  {
    id: 6,
    lon: 65.27318,
    lat: 65.055322,
    name: 'Горки',
    fuels: [
      { weight: 10, name: 'ДТ "A" ТУ' },
      { name: 'ДТ "А" ГОСТ', weight: 25 },
    ],
  },
  {
    id: 7,
    lon: 65.903275,
    lat: 65.842173,
    name: 'Питляр',
    fuels: [
      { weight: 10, name: 'ДТ "A" ТУ' },
      { name: 'ДТ "А" ГОСТ', weight: 25 },
    ],
  },
  {
    id: 8,
    lon: 65.345676,
    lat: 65.901802,
    name: 'Шурышкары',
    fuels: [
      { weight: 10, name: 'ДТ "A" ТУ' },
      { name: 'ДТ "А" ГОСТ', weight: 25 },
    ],
  },
  {
    id: 9,
    lon: 66.075512,
    lat: 66.324116,
    name: 'Катравож',
    fuels: [
      { weight: 10, name: 'ДТ "A" ТУ' },
      { name: 'ДТ "А" ГОСТ', weight: 25 },
    ],
  },
];

const mapParametrsApi: ymaps.ParametrsApi = {
  apikey: 'def62d81-e99f-4395-8b66-dbf1a1d64c1a',
  lang: 'ru_RU',
  mode: 'debug',
};
interface CityMapsProps {
  className?: string;
  ways?: boolean;
}

export const CityMaps: React.FC<CityMapsProps> = React.memo(
  ({ children, ways }) => {
    return (
      <Map
        className="map"
        ways={ways}
        geoEvents={[]}
        parametrsApi={mapParametrsApi}
        state={{
          ...mapState,
          zoom: ways ? 8 : 5,
          center: ways
            ? [65.59292400325111, 65.44664984944318]
            : [69.148271, 77.100097],
        }}
      >
        {placemarksConst.map((event, key) => (
          <Placemark
            model={event}
            key={key + 'Placemark'}
            onClick={() => {}}
            geometry={[event.lat, event.lon]}
          ></Placemark>
        ))}
      </Map>
    );
  }
);