namespace ymaps.multiRouter.pedestrian {
  interface Path extends interfaces.IGeoObject {
    model: PathModel;
    properties: data.Manager;

    getSegmentMarkers(): GeoObjectCollection;
    getSegments(): GeoObjectCollection;
  }
}
