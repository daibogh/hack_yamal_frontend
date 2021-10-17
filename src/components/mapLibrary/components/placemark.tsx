import React from 'react';
import { GeoEventModel } from './map';

interface Props {
  geometry?: number[];
  properties?: ymaps.PlacemarkProperties;
  options?: ymaps.PlacemarkOptions;
  open?: boolean;
  onClick?: (id: string) => void;
  model?: GeoEventModel;
}

export const Placemark: React.FC<Props> = () => {
  return <Placemark />;
};
