namespace ymaps.geoObject.addon {
  interface Editor {
    create(geoObject: interfaces.IGeoObject): void;
    get(geoObject: interfaces.IGeoObject): interfaces.IGeometryEditor;
  }

  declare var editor: Editor;
}
