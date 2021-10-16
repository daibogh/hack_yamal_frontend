namespace ymaps.multiRouter.masstransit {
  interface PathModel extends interfaces.IEventEmitter {
    properties: data.Manager;
    route: multiRouter.masstransit.RouteModel;

    destroy(): void;
    getSegments(): TransferSegmentModel[] | TransportSegmentModel[] | WalkSegmentModel[];
    getType(): string;
    update(pathJson: object): void;
  }
}
