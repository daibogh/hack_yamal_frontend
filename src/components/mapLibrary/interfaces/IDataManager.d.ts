namespace ymaps.interfaces {
  interface IDataManager extends IEventEmitter {
    get(path: string): object;
    set(path: string, value?: object): void;
  }
}
