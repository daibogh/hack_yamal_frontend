namespace ymaps.multiRouter {
  interface MultiRouteModelStatic {
    new (
      referencePoints: interfaces.IMultiRouteReferencePoint[],
      params?: interfaces.IMultiRouteParams
    ): MultiRouteModel;
  }
  interface MultiRouteModel extends interfaces.IEventEmitter {
    properties: data.Manager;

    destroy(): void;
    getAllPoints(): multiRouter.WayPointModel[] | multiRouter.ViaPointModel[];
    getJson(): object;
    getParams(): interfaces.IMultiRouteParams;
    getPoints(): multiRouter.WayPointModel[] | multiRouter.ViaPointModel[];
    getReferencePointIndexes(): ReferencePointIndexes;
    getReferencePoints(): interfaces.IMultiRouteReferencePoint[];
    getRoutes(): multiRouter.driving.RouteModel[] | multiRouter.masstransit.RouteModel[];
    getViaPoints(): multiRouter.ViaPointModel[];
    getWayPoints(): multiRouter.WayPointModel[];
    setParams(params: interfaces.IMultiRouteParams, extend?: boolean = false, clearRequests?: boolean = false): void;
    setReferencePoints(
      referencePoints: interfaces.IMultiRouteReferencePoint[],
      viaIndexes?: number[],
      clearRequests?: boolean = false
    ): void;
  }

  interface ReferencePointIndexes {
    way: number[];
    via: number[];
  }

  declare var MultiRouteModel: MultiRouteModelStatic;
}
