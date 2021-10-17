namespace ymaps.multiRouter.masstransit {
  interface TransportSegmentModel extends interfaces.IEventEmitter {
    geometry: geometry.base.LineString;
    path: multiRouter.masstransit.PathModel;
    properties: data.Manager;

    destroy(): void;
    getStops(): multiRouter.masstransit.StopModel[];
    getType(): string;
    update(segmentJson: object): void;
  }
}
