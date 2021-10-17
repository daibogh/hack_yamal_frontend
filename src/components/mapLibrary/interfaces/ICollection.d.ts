namespace ymaps.interfaces {
  interface ICollection extends IEventEmitter {
    add(object: object): ICollection;
    getIterator(): IIterator;
    remove(object: object): ICollection;
  }
}
