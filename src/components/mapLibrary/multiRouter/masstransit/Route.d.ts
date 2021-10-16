namespace ymaps.multiRouter.masstransit {
  interface Route extends interfaces.IGeoObject {
    ballon: interfaces.IMultiRouterRouteBalloon;
    model: multiRouter.masstransit.RouteModel;
    properties: data.Manager;

    getPaths(): GeoObjectCollection;
  }
}
