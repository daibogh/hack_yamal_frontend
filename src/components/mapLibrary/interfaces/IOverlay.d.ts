namespace ymaps.interfaces {
  interface IOverlay extends ICustomizable, IDomEventEmitter {
    getData(): object;
    getGeometry(): IPixelGeometry;
    getMap(): ymaps.Map | null;
    getShape(): IShape | null;
    isEmpty(): boolean;
    setData(data: object): void;
    setGeometry(geometry: IPixelGeometry): void;
    setMap(map: ymaps.Map | null): void;
  }
}
