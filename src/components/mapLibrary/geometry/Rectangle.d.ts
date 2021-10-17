namespace ymaps.geometry {
  interface RectangleStatic {
    new (coordinates: number[][] | null = null, options?: RectangleOptions = defaultRectangleOptions): Rectangle;
  }
  interface Rectangle extends interfaces.IRectangleGeometry {}

  interface RectangleOptions {
    coordRendering?: ymaps.CoordRenderings | 'boundsPath';
    geodesic?: boolean;
    pixelRendering?: ymaps.PixelRenderings;
    projection?: interfaces.IProjection;
  }

  declare var Rectangle: RectangleStatic;
  declare var defaultRectangleOptions: RectangleOptions = {
    geodesic: false,
    pixelRendering: 'jumpy',
  };
}
