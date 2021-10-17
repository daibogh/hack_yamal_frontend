namespace ymaps.multiRouter.masstransit {
  interface StopModel extends interfaces.IEventEmitter {
    geometry: geometry.base.Point;
    properties: data.Manager;
    segment: multiRouter.masstransit.TransportSegmentModel;

    update(stopJson: object): void;
  }
}
