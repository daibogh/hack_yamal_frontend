module ymaps {
  export class Map extends interfaces.IDomEventEmitter {
    constructor(parentElement: object | string, state: MapState, options?: MapOptions);

    action: map.action.Manager;
    ballon: map.Balloon;
    behaviors: map.behavior.Manager;
    container: map.Container;
    controls: control.Manager;
    converter: map.Converter;
    copyrights: map.Copyrights;
    cursors: util.cursor.Manager;
    events: event.Manager;
    geoObjects: map.GeoObjects;
    hint: map.Hint;
    layers: map.layer.Manager;
    margin: map.margin.Manager;
    options: option.Manager;
    panes: map.pane.Manager;
    zoomRange: map.ZoomRange;

    destroy(): void;
    getBounds(options?: GetOptions): number[][];
    getCenter(options?: GetOptions): number[];
    getGlobalPixelCenter(options?: GetOptions): number[];
    getPanoramaManager(): vow.Promise; //{vow.Promise.<panorama.Manager>} ??
    getType(): string | MapType;
    getZoom(): number;
    panTo(center: number[] | object[], options?: PanToOptions): vow.Promise;
    setBounds(bounds: number[][], options?: SetBoundsOptions): vow.Promise;
    setCenter(center: number[], zoom?: number, options?: SetCenterOptions): vow.Promise;
    setGlobalPixelCenter(
      globalPixelCenter: number[],
      zoom?: number,
      options?: SetGlobalPixelCenterOptions
    ): vow.Promise;
    setType(type: string | MapType, options?: SetTypeOptions): vow.Promise;
    setZoom(zoom: number, options?: SetZoomOptions): vow.Promise;
  }

  export class MapState {
    behaviors?: string[] = ['default'];
    bounds?: number[][];
    center?: number[];
    controls?: string[] = ['default'];
    margin?: number | number[];
    type?: 'yandex#map' | 'yandex#satellite' | 'yandex#hybrid' | ymaps.MapType = 'yandex#map';
    zoom?: number;
  }

  export class MapOptions {
    autoFitToViewport?: 'none' | 'ifNull' | 'always' = 'ifNull';
    avoidFractionalZoom?: boolean = true;
    exitFullscreenByEsc?: boolean = true;
    fullscreenZIndex?: number = 10000;
    mapAutoFocus?: boolean = true;
    maxAnimationZoomDifference?: number = 5;
    maxZoom?: number = 23;
    minZoom?: number = 0;
    nativeFullscreen?: boolean = false;
    projection?: ymaps.interfaces.IProjection = ymaps.projection.wgs84Mercator;
    restrictMapArea?: boolean | number[][] = false;
    suppressMapOpenBlock?: boolean = false;
    suppressObsoleteBrowserNotifier?: boolean = false;
    yandexMapAutoSwitch?: boolean = true;
    yandexMapDisablePoiInteractivity?: boolean = false;
  }

  export class GetOptions {
    useMapMargin: boolean = false;
  }

  export class PanToOptions {
    checkZoomRange: boolean = false;
    delay: number = 1000;
    duration: number = 500;
    flying: boolean = true;
    safe: boolean = true;
    timingFunction: string = 'ease-in-out';
    useMapMargin: boolean = false;
  }

  export class SetBoundsOptions {
    checkZoomRange: boolean = false;
    duration: number = 0;
    preciseZoom: boolean = false;
    timingFunction: string = 'linear';
    useMapMargin: boolean = false;
    zoomMargin: number | number[] = 0;
  }

  export class SetCenterOptions {
    checkZoomRange: boolean = false;
    duration: number = 0;
    timingFunction: string = 'linear';
    useMapMargin: boolean = false;
  }

  export class SetGlobalPixelCenterOptions {
    checkZoomRange: boolean = false;
    duration: number = 0;
    timingFunction: string = 'linear';
    useMapMargin: boolean = false;
  }

  export class SetTypeOptions {
    checkZoomRange: boolean = false;
  }

  export class SetZoomOptions {
    checkZoomRange: boolean = false;
    duration: number = 0;
    useMapMargin: boolean = false;
  }
}
