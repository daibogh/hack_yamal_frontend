namespace ymaps.interfaces {
  interface IGeoObjectSequence extends ICustomizable, IEventEmitter, IParentOnMap {
    each(callback: Function, context?: object): void;
    get(index: number): IGeoObject;
    getBounds(): number[][] | null;
    getIterator(): IIterator;
    getLength(): number;
    getPixelBounds(): number[][] | null;
    indexOf(object: IGeoObject): number;
  }
}
