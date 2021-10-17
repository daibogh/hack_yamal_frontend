namespace ymaps.interfaces {
  interface IGeometryEditorRootModelStatic extends IGeometryEditorModelStatic {
    new (geometry: IGeometry, editor: IGeometryEditor): IGeometryEditorRootModel;
  }
  interface IGeometryEditorRootModel extends IGeometryEditorModel {}
}
