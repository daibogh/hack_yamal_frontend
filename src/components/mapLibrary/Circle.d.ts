module ymaps {
  export class Circle extends GeoObject {
    editor: geometryEditor.Circle;
    geometry: geometry.Circle;
    indices: ArrayBuffer;
    vertices: ArrayBuffer;

    constructor(
      geometry: interfaces.ICircleGeometry | number[][] | object,
      properties?: interfaces.IDataManager | object,
      options?: CircleOptions
    );
  }

  export class CircleOptions {
    circleOverlay: string | Function = 'default#circle';
    cursor: string = 'pointer';
    draggable: boolean = false;
    fill: boolean = true;
    fillColor: string = '0066ff99';
    fillImageHref: string;
    fillMethod: string = 'stretch';
    fillOpacity: number = 1;
    hasBalloon: boolean = true;
    hasHint: boolean = true;
    hideIconOnBalloonOpen: boolean = true;
    interactiveZIndex: boolean = false;
    interactivityModel: string = 'default#geoObject';
    opacity: number = 1;
    openBalloonOnClick: boolean = true;
    openEmptyBalloon: boolean = false;
    openEmptyHint: boolean = false;
    openHintOnHover: boolean = true;
    outline: boolean = true;
    pane: string = 'areas';
    strokeColor: string | string[] = '0066ffff';
    strokeOpacity: number | number[] = 1;
    strokeStyle: string | string[] | object | object[];
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
