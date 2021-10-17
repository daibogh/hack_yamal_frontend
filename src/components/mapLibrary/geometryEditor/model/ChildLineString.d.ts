namespace ymaps.geometryEditor.model {
  interface ChildLineString extends interfaces.IGeometryEditorChildModel {
    getAllVerticesNumber(): number;
    getEdgeModels(): Edge[];
    getIndex(): number;
    getVertexModels(): ChildVertex[];
    setIndex(index: number): void;
    spliceVertices(start: number, deleteCount: number): number[][];
  }
}
