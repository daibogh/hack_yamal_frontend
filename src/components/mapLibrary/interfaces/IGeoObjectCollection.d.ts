namespace ymaps.interfaces {
  interface IGeoObjectCollection extends ICustomizable, IEventEmitter, IParentOnMap {
    add(child: IGeoObject, index?: number): IGeoObjectCollection;
    each(callback: Function, context?: object): void;
    get(index: number): IGeoObject;
    getBounds(): number[][] | null;
    getIterator(): IIterator;
    getLength(): number;
    getPixelBounds(): number[][] | null;
    indexOf(object: object): number;
    remove(child: IGeoObject): IGeoObjectCollection;
    removeAll(): IGeoObjectCollection;
    set(index: number, child: IGeoObject): IGeoObjectCollection;
    splice(index: number, number: number): IGeoObjectCollection;
  }
}
