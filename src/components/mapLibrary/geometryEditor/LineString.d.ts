namespace ymaps.geometryEditor {
  interface LineStringStatic {
    new (geometry: interfaces.ILineStringGeometry, options?: LineStringOptions = defaultLineStringOptions): LineString;
  }
  interface LineString extends interfaces.IGeometryEditor {
    state: interfaces.IDataManager;

    getModel(): vow.Promise;
    getModelSync(): model.RootLineString | null;
    getView(): vow.Promise;
    getViewSync(): view.Path | null;
    startDrawing(): vow.Promise;
    startEditing(): vow.Promise;
    startFraming(): vow.Promise;
    stopDrawing(): void;
    stopEditing(): void;
    stopFraming(): void;
  }

  interface LineStringOptions {
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

  declare var LineString: LineStringStatic;
  declare var defaultLineStringOptions: LineStringOptions = {
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
