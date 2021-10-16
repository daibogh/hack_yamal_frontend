namespace ymaps.interfaces {
  interface IHotspotLayerObject extends ICustomizable, IDomEventEmitter {
    getGeometry(): object;
    getHotspot(): IHotspot;
    getId(): number;
    getProperties(): object;
    setGeometry(geometry: object): void;
    setId(id: number): void;
    setProperties(properties: object): void;
  }
}
