namespace ymaps.geometryEditor {
  interface PointStatic {
    new (geometry: interfaces.IPointGeometry, options?: PointOptions = defaultPointOptions): Point;
  }
  interface Point extends interfaces.IGeometryEditor {
    state: interfaces.IDataManager;

    startDrawing(): vow.Promise;
    stopDrawing(): vow.Promise;
  }

  interface PointOptions {
    dblClickHandler?: Function;
    drawingCursor?: boolean | string;
    drawOver?: boolean;
  }

  declare var Point: PointStatic;
  declare var defaultPointOptions: PointOptions = {
    drawingCursor: 'arrow',
    drawOver: true,
  };
}
