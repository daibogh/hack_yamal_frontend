namespace ymaps.interfaces {
  interface IGeoObject extends IChildOnMap, ICustomizable, IDomEventEmitter, IParentOnMap {
    geometry?: IGeometry | null;
    options?: IOptionManager;
    properties?: IDataManager;
    state?: IDataManager;
    getOverlay(): ymaps.vow.Promise;
    getOverlaySync(): IOverlay;
  }
}
