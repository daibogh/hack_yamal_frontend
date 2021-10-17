namespace ymaps.multiRouter {
  interface WayPointModel extends interfaces.IEventEmitter {
    geometry: geometry.base.Point;
    multiRoute: multiRouter.MultiRouteModel;
    properties: data.Manager;

    destroy(): void;
    getReferencePoint(): object;
    getReferencePointIndex(): number;
    setReferencePoint(referencePoint: string | number[] | geometry.Point): void;
    update(wayPointJson: object): void;
  }
}
