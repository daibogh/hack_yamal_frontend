module ymaps {
  export class Placemark extends interfaces.IGeoObject {
    constructor(
      geometry: number[] | object | interfaces.IPointGeometry,
      properties?: interfaces.IDataManager | PlacemarkProperties,
      options?: PlacemarkOptions
    );

    editor: geometryEditor.Point;
    geometry: geometry.Point;

    getMap(): Map;
    getOverlay(): vow.Promise;
    getOverlaySync(): interfaces.IOverlay | null;
    getParent(): interfaces.IParentOnMap | null;
    setParent(parent: interfaces.IParentOnMap | null): interfaces.IChildOnMap;
  }

  export class PlacemarkProperties {
    fullCluster?: boolean = false;
    full?: boolean = false;
    id?: number;
    iconContent?: string;
    iconCaption?: string;
    hintContent?: string;
    balloonContent?: string;
    balloonContentHeader?: string;
    balloonContentBody?: string;
    balloonContentFooter?: string;
  }

  export class PlacemarkOptions {
    typeForFilter?:string;
    onClickIds?:string[];
    balloonContentLayoutTemplate?:string;
    balloonPanelMaxMapArea?:number;
    balloonContentLayout?:Function;
    balloonCloseButton?: boolean = true;
    preset?: string;
    iconColor?: string;
    iconLayout?: string;
    cursor?: string = 'pointer';
    draggable?: boolean = false;
    hasBalloon?: boolean = true;
    hasHint?: boolean = true;
    hideIconOnBalloonOpen?: boolean = true;
    iconOffset?: number[];
    iconShape?: interfaces.IGeometryJson | null;
    interactiveZIndex?: boolean = true;
    interactivityModel?: string = 'default#geoObject';
    openBalloonOnClick?: boolean = true;
    openEmptyBalloon?: boolean = false;
    openEmptyHint?: boolean = false;
    openHintOnHover?: boolean = true;
    pane?: string = 'places';
    pointOverlay?:
      | string
      | ((
          geometry: interfaces.IPixelPointGeometry,
          data: interfaces.IDataManager | object,
          options: object
        ) => vow.Promise) = 'default#placemark';
    syncOverlayInit?: boolean = false;
    useMapMarginInDragging?: boolean = true;
    visible?: boolean = true;
    zIndex?: number;
    zIndexActive?: number;
    zIndexDrag?: number;
    zIndexHover?: number;
  }
}
