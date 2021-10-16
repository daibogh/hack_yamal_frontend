namespace ymaps.multiRouter.masstransit {
  interface RouteModel extends interfaces.IEventEmitter {
    multiRoute: multiRouter.MultiRouteModel;
    properties: data.Manager;

    destroy(): void;
    getPaths(): PathModel[];
    getType(): string;
    update(routeJson: object): void;
  }
}
