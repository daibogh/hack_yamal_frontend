module ymaps {
  export module overlay {
    export class Polyline extends interfaces.IOverlay {
      constructor(geometry: interfaces.IPixelLineStringGeometry, data?: object, options?: PolylineOptions);
    }

    export class PolylineOptions {
      interactive: boolean = true;
      opacity: number;
      separateContainer: boolean;
      strokeColor: string;
      strokeOpacity: number;
      strokeStyle: number[] | string;
      strokeWidth: number;
    }
  }
}
