namespace ymaps.multiRouter.pedestrian {
  interface Route extends interfaces.IGeoObject {
    ballon: interfaces.IMultiRouterRouteBalloon;
    model: RouteModel;
    properties: data.Manager;

    getPaths(): GeoObjectCollection;
  }
}
