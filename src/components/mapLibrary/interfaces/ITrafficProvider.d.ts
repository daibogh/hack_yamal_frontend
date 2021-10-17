namespace ymaps.interfaces {
  interface ITrafficProvider extends ICustomizable, IEventEmitter {
    getMap(): ymaps.Map | null;
    setMap(Reference: ymaps.Map | null): void;
  }
}
