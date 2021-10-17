namespace ymaps.geometryEditor.model {
  interface Edge extends interfaces.IGeometryEditorRootModel {
    getNextVertex(): ChildVertex | null;
    getPrevVertex(): ChildVertex | null;
    setNextVertex(nextVertex: ChildVertex | null): void;
    setPrevVertex(prevVertex: ChildVertex | null): void;
  }
}
