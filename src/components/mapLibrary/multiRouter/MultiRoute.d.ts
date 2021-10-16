namespace ymaps.multiRouter {
  interface MultiRouteStatic {
    new (
      model: multiRouter.MultiRouteModel | interfaces.IMultiRouteModelJson,
      options?: MultiRouteOptions = defaultMultiRouteOptions
    ): MultiRoute;
  }
  interface MultiRoute extends interfaces.IGeoObject {
    editor: multiRouter.EditorAddon;
    model: multiRouter.MultiRouteModel;

    getActiveRoute(): multiRouter.driving.Route | multiRouter.masstransit.Route | null;
    getBounds(): number[][] | null;
    getPixelBounds(): number[][] | null;
    getRoutes(): GeoObjectCollection;
    getViaPoints(): GeoObjectCollection;
    getWayPoints(): GeoObjectCollection;
    setActiveRoute(model: multiRouter.driving.Route | multiRouter.masstransit.Route): void;
  }

  interface MultiRouteOptions {
    activeRouteAutoSelection?: boolean;
    boundsAutoApply?: boolean;
    dragUpdateInterval?: string | number;
    preventDragUpdate?: boolean;
    useMapMargin?: boolean;
    zoomMargin?: number | number[];
  }

  declare var MultiRoute: MultiRouteStatic;
  declare var defaultMultiRouteOptions: MultiRouteOptions = {
    activeRouteAutoSelection: true,
    boundsAutoApply: false,
    preventDragUpdate: false,
    useMapMargin: true,
    zoomMargin: 0,
  };
}
