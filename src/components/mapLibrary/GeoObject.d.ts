module ymaps {
  export class GeoObject extends interfaces.IGeoObject {
    constructor(feature: GeoObjectFeature, options?: GeoObjectOptions);

    balloon: geoObject.Balloon;
    editor: interfaces.IGeometryEditor;
    events: event.Manager;
    geometry: interfaces.IGeometry | null;
    hint: geoObject.Hint;
    options: option.Manager;
    properties: data.Manager;
    state: data.Manager;

    getOverlay(): ymaps.vow.Promise;
    getOverlaySync(): ymaps.interfaces.IOverlay|null;
    getMap(): ymaps.Map;
    getParent(): ymaps.interfaces.IParentOnMap|null;
    setParent(parent: ymaps.interfaces.IParentOnMap|null): ymaps.interfaces.IChildOnMap;
  }

  export class GeoObjectFeature {
    geometry: interfaces.IGeometry | interfaces.IGeometryJson;
    properties: interfaces.IDataManager | GeoObjectFeatureProperties;
  }

  export class GeoObjectFeatureProperties {
    //check
    iconContent?: string;
    iconCaption?: string;
    hintContent?: string;
    balloonContent?: string;
    balloonContentHeader?: string;
    balloonContentBody?: string;
    balloonContentFooter?: string;
  }

  export class GeoObjectOptions {
    circleOverlay?:
      | string
      | ((geometry?: interfaces.IPixelCircleGeometry, data?: object, options?: object) => vow.Promise) =
      'default#circle';
    cursor?: string = 'pointer';
    draggable?: boolean = false;
    fill?: boolean = true;
    fillColor?: string = '0066ff99';
    fillImageHref?: string;
    fillMethod?: 'stretch' | 'tile' = 'stretch';
    fillOpacity?: number = 1;
    hasBalloon?: boolean = true;
    hasHint?: boolean = true;
    hideIconOnBalloonOpen?: boolean = true;
    iconCaptionMaxWidth?: number = 188;
    iconColor?: string;
    iconContentLayout?: Function | string;
    iconContentOffset?: number[];
    iconContentPadding?: number[];
    iconContentSize?: number[];
    iconImageClipRect?: number[][] = [[0, 0]];
    iconImageHref?: string;
    iconImageOffset?: number[];
    iconImageShape?: interfaces.IShape | null;
    iconImageSize?: number[];
    iconLayout?: Function | string;
    iconMaxHeight?: number;
    iconMaxWidth?: number;
    iconOffset?: number[] = [0, 0];
    iconShadow?: boolean = false;
    iconShadowImageClipRect?: number[][] = [[0, 0]];
    iconShadowImageHref?: string;
    iconShadowImageOffset?: number[];
    iconShadowImageSize?: number[];
    iconShadowLayout?: Function | string;
    iconShadowOffset?: number[];
    interactiveZIndex?: boolean;
    interactivityModel?: string = 'default#geoObject';
    lineStringOverlay?:
      | string
      | ((
          geometry?: interfaces.IPixelLineStringGeometry,
          data?: interfaces.IDataManager | object,
          options?: object
        ) => vow.Promise) = 'default#polyline';
    opacity?: number = 1;
    openBalloonOnClick?: boolean = true;
    openEmptyBalloon?: boolean = false;
    openEmptyHint?: boolean = false;
    openHintOnHover?: boolean = true;
    outline?: boolean = true;
    pane?: string;
    pointOverlay?:
      | string
      | ((
          geometry?: interfaces.IPixelPointGeometry,
          data?: interfaces.IDataManager | object,
          options?: object
        ) => vow.Promise) = 'default#placemark';
    polygonOverlay?:
      | string
      | ((
          geometry?: interfaces.IPixelPolygonGeometry,
          data?: interfaces.IDataManager | object,
          options?: object
        ) => vow.Promise) = 'default#polygon';
    preset?: string;
    rectangleOverlay?:
      | string
      | ((
          geometry?: interfaces.IPixelCircleGeometry,
          data?: interfaces.IDataManager | object,
          options?: object
        ) => vow.Promise) = 'default#rectangle';
    setMapCursorInDragging?: boolean = false;
    strokeColor?: string | string[] = '0066ffff';
    strokeOpacity?: number | number[] = 1;
    strokeStyle?: string | string[] | object | object[];
    strokeWidth?: number | number[] = 1;
    syncOverlayInit?: boolean = false;
    useMapMarginInDragging?: boolean = true;
    visible?: boolean = true;
    zIndex?: number;
    zIndexActive?: number;
    zIndexDrag?: number;
    zIndexHover?: number;
  }
}
