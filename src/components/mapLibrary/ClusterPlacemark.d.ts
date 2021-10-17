module ymaps {
  export class ClusterPlacemark implements interfaces.IGeoObject, collection.Item {
    state: data.Manager;

    constructor(
      geometry: interfaces.IPointGeometry | number[] | object,
      properties: ClusterPlacemarkProperties,
      options?: ClusterPlacemarkOptions
    );

    getBounds(): number[][];
    getGeoObjects(): interfaces.IGeoObject[];
  }

  export class ClusterPlacemarkProperties extends interfaces.IDataManager {
    geoObjects: interfaces.IGeoObject[];
  }

  export class ClusterPlacemarkOptions {
    balloonContentLayout: string | Function = 'cluster#balloonTwoColumns';
    balloonContentLayoutHeight: number;
    balloonContentLayoutWidth: number;
    balloonItemContentLayout: string | interfaces.ILayout;
    balloonPanelContentLayout: string | Function = null;
    cursor: string = 'pointer';
    disableClickZoom: boolean = false;
    hideIconOnBalloonOpen: boolean = true;
    iconColor: string;
    iconContentLayout: string | Function = 'cluster#iconContent';
    iconLayout: string | Function = 'cluster#icon';
    icons: ClusterPlacemarkOptionsIcons[];
    iconShape: interfaces.IGeometryJson | null;
    interactivityModel: string = 'default#geoObject';
    numbers: number[] = [10, 100];
    openBalloonOnClick: boolean = true;
    openEmptyHint: boolean = false;
    openHintOnHover: boolean = true;
    zIndexHover: number;
  }

  export class ClusterPlacemarkOptionsIcons {
    href: string;
    size: number[];
    offset: number[];
    shape: string | interfaces.IShape;
  }
}
