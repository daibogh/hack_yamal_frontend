namespace ymaps.multiRouter.pedestrian {
  interface RouteModel extends interfaces.IEventEmitter {
    multiRoute: MultiRouteModel;
    properties: data.Manager;

    destroy(): void;
    getPaths(): PathModel[];
    getType(): string;
    update(routeJson: object): void;
  }
}
