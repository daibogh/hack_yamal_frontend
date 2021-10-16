namespace ymaps.multiRouter.masstransit {
  interface Path extends interfaces.IGeoObject {
    model: PathModel;
    properties: data.Manager;

    getSegmentMarkers(): GeoObjectCollection;
    getSegments(): GeoObjectCollection;
  }
}
