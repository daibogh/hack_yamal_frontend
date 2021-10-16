namespace ymaps.multiRouter.driving {
  interface SegmentModel extends interfaces.IGeoObject {
    geometry: geometry.base.LineString;
    path: multiRouter.driving.PathModel;
    properties: data.Manager;

    destroy(): void;
    getType(): string;
    getViaPoints(): multiRouter.ViaPointModel[];
    update(segmentJson: object): void;
  }
}
