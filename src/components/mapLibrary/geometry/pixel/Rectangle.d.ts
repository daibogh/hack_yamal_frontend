namespace ymaps.geometry.pixel {
  interface RectangleStatic {
    new (coordinates?: number[][] | null = null, metaData?: object): Rectangle;
  }
  interface Rectangle extends interfaces.IPixelRectangleGeometry {}

  declare var Rectangle: RectangleStatic;
}
