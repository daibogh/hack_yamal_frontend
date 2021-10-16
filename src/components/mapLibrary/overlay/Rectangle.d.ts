module ymaps {
  export module overlay {
    export class Rectangle extends interfaces.IOverlay {
      constructor(geometry: interfaces.IPixelRectangleGeometry, data?: object, options?: RectangleOptions);
    }

    export class RectangleOptions {
      borderRadius: number;
      fill: string;
      fillColor: string;
      fillImageHref: string;
      fillMethod: 'stretch' | 'tile' = 'stretch';
      fillOpacity: number;
      interactive: boolean = true;
      opacity: number;
      outline: string;
      separateContainer: boolean;
      strokeColor: string;
      strokeOpacity: number;
      strokeStyle: number[] | string;
      strokeWidth: number;
    }
  }
}
