module ymaps {
  export class Polyline extends GeoObject {
    constructor(
      geometry: number[][] | object | interfaces.ILineStringGeometry,
      properties?: interfaces.IDataManager | object,
      options?: PolylineOptions
    );

    editor: geometryEditor.LineString;
    geometry: geometry.LineString;
  }

  export class PolylineOptions {
    cursor?: string = 'pointer';
    draggable?: boolean = false;
    hasBalloon?: boolean = true;
    hasHint?: boolean = true;
    interactiveZIndex?: boolean = false;
    interactivityModel?: string = 'default#geoObject';
    lineStringOverlay?: string | Function = 'default#polyline';
    opacity?: number = 1;
    openBalloonOnClick?: boolean = true;
    openEmptyBalloon?: boolean = false;
    openEmptyHint?: boolean = false;
    openHintOnHover?: boolean = true;
    pane?: string | interfaces.IPane = 'areas';
    strokeColor?: string | string[] = '0066ffff';
    strokeOpacity?: number | number[] = 1;
    strokeStyle?: string | string[] | Object | Object[];
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
