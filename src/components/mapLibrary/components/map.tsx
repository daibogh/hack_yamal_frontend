import React, { ReactElement, useEffect } from 'react';

export interface Fuel {
  weight: number;
  name: string;
}

export interface GeoEventModel {
  lat: number;
  lon: number;
  id: number;
  name: string;
  fuels: Fuel[];
}

interface Props {
  geoEvents: GeoEventModel[];
  parametrsApi: ymaps.ParametrsApi;
  state: ymaps.MapState;
  options?: ymaps.MapOptions;
  children?: (ReactElement | ReactElement[])[];
  className?: string;
  addNewGeoObject?: (coords: number[]) => void;
  templateNewPlacemark?: {
    properties: ymaps.PlacemarkProperties;
    options: ymaps.PlacemarkOptions;
  };
  onClickNewPlacemark?: (id: string) => void;
}

export const Map: React.FC<Props> = ({
  parametrsApi,
  state,
  options,
  children,
  className,
}) => {
  let myMap: ymaps.Map | undefined;
  useEffect(() => {
    var elem = document.createElement('script');
    elem.type = 'text/javascript';
    const src = `https://api-maps.yandex.ru/2.1/?apikey=${parametrsApi.apikey}&lang=${parametrsApi.lang}`;
    if (parametrsApi.coordorder)
      src.concat(`&coordorder=${parametrsApi.coordorder}`);
    if (parametrsApi.load) src.concat(`&load=${parametrsApi.load}`);
    if (parametrsApi.mode) src.concat(`&mode=${parametrsApi.mode}`);
    if (parametrsApi.csp) src.concat(`&csp=${parametrsApi.csp}`);
    if (parametrsApi.ns) src.concat(`&ns=${parametrsApi.ns}`);
    if (parametrsApi.onload) src.concat(`&onload=${parametrsApi.onload}`);
    if (parametrsApi.onerror) src.concat(`&onerror=${parametrsApi.onerror}`);
    elem.src = src;
    document.getElementsByTagName('body')[0].appendChild(elem);
  }, [parametrsApi]);

  setTimeout(() => {
    try {
      let allChildren: ReactElement[] = [];
      children?.forEach((x) => {
        if (x instanceof Array) x.forEach((itemX) => allChildren.push(itemX));
        else allChildren.push(x);
      });

      ymaps.ready(function () {
        myMap = new ymaps.Map('map', state, options);
        const getBalloonContentLayoutTemplate = (model: GeoEventModel) => {
          let types: string = '';
          model.fuels.forEach(
            (x) =>
              (types += `<div class='line'><div class='type'>${x.name}</div><div class='count'>${x.weight} тонн </div></div>`)
          );
          return `<div><div class='header'>${model.name}</div>${types}</div> `;
        };
        console.log(myMap);

        const getPlacemark = (
          geometry: number[],
          model: GeoEventModel
        ): ymaps.Placemark => {
          let placemark: ymaps.Placemark = new ymaps.Placemark(geometry);
          let balloonContentLayout = getBalloonContentLayoutTemplate(model);
          placemark = new ymaps.Placemark(
            geometry,
            {
              balloonContent: balloonContentLayout,
              iconCaption: model.name,
            },
            { preset: 'islands#circleIcon', iconColor: '#0059DF' }
          );
          return placemark;
        };

        React.Children.toArray(allChildren).forEach((item: any) => {
          if ((item as any).key.toString().includes('Placemark')) {
            let myPlacemark = getPlacemark(
              item.props?.geometry,
              item.props.model as GeoEventModel
            );
            myMap?.geoObjects.add(myPlacemark);
          }
        });

        var myPolyline = new ymaps.Polyline(
          [
            [69.097106, 76.87626],
            [66.151575, 72.410689],
            [65.714648, 82.41785],
          ],
          undefined,
          { strokeWidth: 2.5, strokeColor: '#0059DF' }
        );

        myMap.geoObjects.add(myPolyline);
      });
    } catch (error) {
      console.log(error);
    }
  }, 800);

  return (
    <div className={className} id="map">
      {myMap}
    </div>
  );
};
