namespace ymaps {
  export class Polygon extends GeoObject {
    constructor(
      geometry: number[][][] | object | interfaces.IPolygonGeometry,
      properties?: interfaces.IDataManager | object,
      options?: PolygonOptions
    );

    editor: geometryEditor.Polygon;
    geometry: geometry.Polygon;
  }

  export class PolygonOptions {
    stroke?:boolean;
    cursor?: string = 'pointer';
    draggable?: boolean = false;
    fill?: boolean = true;
    fillColor?: string = '0066ff99';
    fillImageHref?: string;
    fillMethod?: 'stretch' | 'tile' = 'stretch';
    fillOpacity?: number = 1;
    hasBalloon?: boolean = true;
    hasHint?: boolean = true;
    interactiveZIndex?: boolean = false;
    interactivityModel?: string = 'default#geoObject';
    opacity?: number = 1;
    openBalloonOnClick?: boolean = true;
    openEmptyBalloon?: boolean = false;
    openEmptyHint?: boolean = false;
    openHintOnHover?: boolean = true;
    outline?: boolean = true;
    pane?: string = 'areas';
    polygonOverlay?: string | Function = 'default#polygon';
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
