namespace ymaps.interfaces {
  interface IChild extends IEventEmitter {
    getParent(): object;
    setParent(parent: object): IChild;
  }
}
