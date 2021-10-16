namespace ymaps.multiRouter.pedestrian {
  interface SegmentModel extends interfaces.IEventEmitter {
    geometry: geometry.base.LineString;
    path: PathModel;
    properties: data.Manager;

    destroy(): void;
    getType(): string;
  }
}
