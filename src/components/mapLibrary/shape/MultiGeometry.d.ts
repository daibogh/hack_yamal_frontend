module ymaps {
  export module shape {
    export class MultiGeometry extends interfaces.IShape {
      constructor(pixelGeometry: interfaces.IPixelMultiLineGeometry, params?: MultiPolygonParameters);
    }

    export class MultiPolygonParameters {
      fill: boolean = true;
      outline: boolean = true;
      strokeWidth: number = 0;
    }
  }
}
