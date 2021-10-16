namespace ymaps.interfaces {
  interface IHotspot extends IDomEventEmitter {
    getShape(): IShape;
    setShape(shape: IShape): void;
    getZIndex(): number;
    setZIndex(zIndex: number): void;
  }
}
