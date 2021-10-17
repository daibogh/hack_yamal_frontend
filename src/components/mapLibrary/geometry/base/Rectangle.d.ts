namespace ymaps.geometry.base {
  interface RectangleStatic {
    new (coordinates: number[][] | null = null): Rectangle;
  }
  interface Rectangle extends interfaces.IBaseRectangleGeometry {
    events: event.Manager;
  }

  declare var Rectangle: RectangleStatic;
}
