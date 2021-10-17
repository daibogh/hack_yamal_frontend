namespace ymaps.geometryEditor {
  interface PolygonStatic {
    new (geometry: interfaces.IPolygonGeometry, options?: PolygonOptions = defaultPolygonOptions): Polygon;
  }
  interface Polygon extends interfaces.IGeometryEditor {
    state: ymaps.data.Manager;

    getModel(): vow.Promise;
    getModelSync(): model.RootPolygon | null;
    getView(): vow.Promise;
    getViewSync(): view.MultiPath | null;
    startDrawing(): vow.Promise;
    startEditing(): vow.Promise;
    startFraming(): vow.Promise;
    stopDrawing(): void;
    stopEditing(): void;
    stopFraming(): void;
  }

  interface PolygonOptions {
    dblClickHandler?: Function;
    drawingCursor?: boolean | string;
    drawOver?: boolean;
    edgeInteractiveOptions?: boolean;
    edgeLayout?: Function;
    maxPoints?: number;
    menuManager?: Function;
    minPoints?: number;
    useAutoPanInDrawing?: boolean;
    useMapMarginInDrawing?: boolean;
    vertexInteractiveOptions?: boolean;
    vertexLayout?: Function;
  }

  declare var Polygon: PolygonStatic;
  declare var defaultPolygonOptions: PolygonOptions = {
    drawingCursor: 'arrow',
    drawOver: true,
    edgeInteractiveOptions: true,
    maxPoints: Infinity,
    minPoints: 0,
    useAutoPanInDrawing: true,
    useMapMarginInDrawing: true,
    vertexInteractiveOptions: true,
  };
}
