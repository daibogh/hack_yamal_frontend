import React from 'react';

interface Props {
  geometry: number[][][] | object | ymaps.interfaces.IPolygonGeometry;
  properties?:ymaps.interfaces.IDataManager | object;
  options?:ymaps.PolygonOptions;
}

export const Polygon: React.FC<Props> = () => {
  return <div></div>;
};
