namespace ymaps.multiRouter.driving {
  interface PathModel extends interfaces.IEventEmitter {
    properties: data.Manager;
    route: multiRouter.driving.RouteModel;

    destroy(): void;
    getSegments(): multiRouter.driving.SegmentModel[];
    getType(): string;
    update(pathJson: object): void;
  }
}
