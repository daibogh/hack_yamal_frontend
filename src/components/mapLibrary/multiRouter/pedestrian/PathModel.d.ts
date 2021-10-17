namespace ymaps.multiRouter.pedestrian {
  interface PathModel extends interfaces.IEventEmitter {
    properties: data.Manager;
    route: RouteModel;

    destroy(): void;
    getSegments(): SegmentModel;
    getType(): string;
    update(pathJson: object): void;
  }
}
