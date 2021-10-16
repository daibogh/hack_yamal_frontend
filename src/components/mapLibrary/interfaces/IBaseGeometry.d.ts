namespace ymaps.interfaces {
  interface IBaseGeometry extends IEventEmitter {
    getBounds(): number[][] | null;
    getType(): string;
  }
}
