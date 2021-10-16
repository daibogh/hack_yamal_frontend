namespace ymaps.geometry {
  interface PolygonStatic {
    new (
      coordinates: number[][][] = [],
      fillRule: string = 'evenOdd',
      options: PolygonOptions = defaultPolygonOptions
    ): Polygon;
  }

  interface Polygon extends interfaces.IPolygonGeometry {}

  interface PolygonOptions {
    coordRendering?: string;
    geodesic?: boolean;
    pixelRendering?: string;
    projection?: interfaces.IProjection;
    simplification?: boolean;
  }

  declare var Polygon: PolygonStatic;
  declare var defaultPolygonOptions: PolygonOptions = {
    coordRendering: 'shortestPath',
    geodesic: false,
    pixelRendering: 'jumpy',
    simplification: true,
  };
}
