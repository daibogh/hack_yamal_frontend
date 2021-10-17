import React, { ReactElement, useEffect } from 'react';

const coords: number[][] = [
  [64.983271, 65.754325],
  [64.99335524422051, 65.69760413361173],
  [65.0061236811754, 65.62893958263679],
  [65.01018508612795, 65.60078711673708],
  [65.0014813192011, 65.52388281964517],
  [65.0049631663171, 65.45453162316048],
  [65.03164225466648, 65.37625403504907],
  [65.03396091551893, 65.28561682776217],
  [65.05076518090483, 65.2608975894112],
  [65.055322, 65.27318],
  [65.07904947036275, 65.24999462214171],
  [65.12876774957415, 65.28844677068767],
  [65.21296056104451, 65.31041942699964],
  [65.27851444819449, 65.38732372409157],
  [65.37482407370436, 65.56585155662637],
  [65.4068490330459, 65.60705028721132],
  [65.50155079468409, 65.66198192799128],
  [65.56184389397573, 65.64550243546292],
  [65.62199769155836, 65.71142040439885],
  [65.69445093834935, 65.70867382235986],
  [65.76219212077493, 65.80755077576374],
  [65.83144269935396, 65.87072216239729],
  [65.84661913372831, 65.90780101992377],
  [65.86848615846583, 65.89218543792686],
  [65.93293249415964, 65.90236823370392],
  [65.99721693554265, 65.912551029481],
  [66.04790806089784, 65.8667284484842],
  [66.09824175739082, 65.86389902673922],
  [66.11156036967188, 65.82882668712092],
  [66.1239847709688, 65.76745009278886],
  [66.1815898362317, 65.84636285693007],
  [66.22404492352184, 65.92308359984513],
  [66.28759392146893, 66.14009370123343],
  [66.32194943980804, 66.15324582859029],
  [66.315945393401, 66.11596038946338],
  [66.32086297160083, 66.06821139900579],
  [66.31582355380763, 66.08949637295686],
  [66.31297778237462, 66.14971045472046],
  [66.26668881369628, 66.03813730321731],
  [66.22274129646314, 65.90921745288078],
  [66.14161908139438, 65.67288526053719],
  [66.10048158693735, 65.65161536365288],
  [66.07365849830256, 65.61143889095447],
  [66.04200919814525, 65.58780567172012],
  [66.01992730152492, 65.56653577440919],
  [65.96608258525549, 65.50036276055297],
  [65.91598210588462, 65.49327279478265],
  [65.89186039131789, 65.41291984938584],
  [65.8879988094584, 65.37510669861086],
  [65.89899254515677, 65.34696290072544],
];
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
  ways?: boolean;
}

export const Map: React.FC<Props> = ({
  parametrsApi,
  state,
  options,
  children,
  className,
  ways,
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
              balloonContent: ways ? '' : balloonContentLayout,
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

        if (ways) {
          var myPolyline = new ymaps.Polyline(coords, undefined, {
            strokeWidth: 2.5,
            strokeColor: '#0059DF',
          });

          myMap.geoObjects.add(myPolyline);
        }
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
