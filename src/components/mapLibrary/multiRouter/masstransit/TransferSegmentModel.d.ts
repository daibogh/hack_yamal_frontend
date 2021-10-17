namespace ymaps.multiRouter.masstransit {
  interface TransferSegmentModel extends interfaces.IGeoObject {
    geometry: geometry.base.LineString;
    path: multiRouter.masstransit.PathModel;
    properties: data.Manager;

    destroy(segmentJson: object): void;
    getType(): string;
  }
}
