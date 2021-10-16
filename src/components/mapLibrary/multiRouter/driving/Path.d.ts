namespace ymaps.multiRouter.driving {
  interface Path extends interfaces.IGeoObject {
    model: PathModel;
    properties: data.Manager;

    getSegments(): GeoObjectCollection;
  }
}
