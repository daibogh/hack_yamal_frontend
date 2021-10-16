namespace ymaps.multiRouter.driving {
  interface Route extends interfaces.IGeoObject {
    ballon: interfaces.IMultiRouterRouteBalloon;
    model: multiRouter.driving.RouteModel;
    properties: data.Manager;

    getPaths(): GeoObjectCollection;
  }
}
