module ymaps {
  export class Rectangle extends GeoObject {
    constructor(
      geometry: number[][] | object | interfaces.IRectangleGeometry,
      properties?: interfaces.IDataManager | object,
      options?: RectangleOptions
    );

    editor = null; //not implemented
    geometry: geometry.Rectangle;
  }

  export class RectangleOptions {
    cursor: string = 'pointer';
    draggable: boolean = false;
    fill: boolean = true;
    fillColor: string = '0066ff99';
    fillImageHref: string;
    fillMethod: 'stretch' | 'tile' = 'stretch';
    fillOpacity: number = 1;
    hasBalloon: boolean = true;
    hasHint: boolean = true;
    interactiveZIndex: boolean = false;
    interactivityModel: string = 'default#geoObject';
    opacity: number = 1;
    openBalloonOnClick: boolean = true;
    openEmptyBalloon: boolean = false;
    openEmptyHint: boolean = false;
    openHintOnHover: boolean = true;
    outline: boolean = true;
    pane: string = 'places';
    rectangleOverlay: string | Function = 'default#rectangle';
    strokeColor: string | string[] = '0066ffff';
    strokeOpacity: number | number[] = 1;
    strokeStyle: string | string[] | Object | Object[];
    strokeWidth: number | number[] = 1;
    syncOverlayInit: boolean = false;
    useMapMarginInDragging: boolean = true;
    visible: boolean = true;
    zIndex: number;
    zIndexActive: number;
    zIndexDrag: number;
    zIndexHover: number;
  }
}
