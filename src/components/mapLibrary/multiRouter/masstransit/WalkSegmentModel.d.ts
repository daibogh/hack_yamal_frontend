namespace ymaps.multiRouter.masstransit {
  interface WalkSegmentModel extends interfaces.IEventEmitter {
    geometry: geometry.base.LineString;
    path: multiRouter.masstransit.PathModel;
    properties: data.Manager;

    destroy(): void;
    getType(): string;
  }
}
