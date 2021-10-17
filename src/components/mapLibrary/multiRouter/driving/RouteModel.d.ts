namespace ymaps.multiRouter.driving {
  interface RouteModel extends interfaces.IEventEmitter {
    multiRoute: multiRouter.MultiRouteModel;
    properties: data.Manager;

    destroy(): void;
    getPaths(): multiRouter.driving.PathModel[];
    getType(): string;
    update(routeJson: object): void;
  }
}
