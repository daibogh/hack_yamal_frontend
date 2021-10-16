namespace ymaps.geometryEditor {
  interface CircleStatic {
    new (geometry: interfaces.ICircleGeometry, options?: CircleOptions = defaultCircleOptions): Circle;
  }
  interface Circle extends interfaces.IGeometryEditor {
    state: data.Manager;

    startDrawing(): vow.Promise;
    stopDrawing(): vow.Promise;
  }

  interface CircleOptions {
    drawingCursor?: boolean | string;
    drawOver?: boolean;
  }

  declare var Circle: CircleStatic;
  declare var defaultCircleOptions: CircleOptions = {
    drawingCursor: 'arrow',
    drawOver: true,
  };
}
