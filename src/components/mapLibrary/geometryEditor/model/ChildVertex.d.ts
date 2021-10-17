namespace ymaps.geometryEditor.model {
  interface ChildVertex extends interfaces.IGeometryEditorChildModel {
    getAllVerticesNumber(): number;
    getIndex(): number;
    getNextVertex(): ChildVertex | null;
    getPrevVertex(): ChildVertex | null;
    setGlobalPixels(pixels: number[]): void;
    setIndex(index: number): void;
    setNextVertex(nextVertex: ChildVertex | null): void;
    setPrevVertex(prevVertex: ChildVertex | null): void;
  }
}
