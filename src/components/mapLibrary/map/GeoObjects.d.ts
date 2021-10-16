namespace ymaps.map {
  interface GeoObjectsStatic {
    new (map: ymaps.Map, options?: object): GeoObjects;
  }
  interface GeoObjects extends interfaces.IGeoObjectCollection {
    add(child: any, index?: number): GeoObjects;
    each(callback: Function, context?: object): void;
    get(index: number): interfaces.IGeoObject;
    getBounds(): number[][] | null;
    getIterator(): interfaces.IIterator;
    getLength(): number;
    getPixelBounds(): number[][] | null;
    indexOf(object: object): number;
    remove(child: interfaces.IGeoObject): GeoObjects;
    removeAll(): GeoObjects;
    set(index: number, child: interfaces.IGeoObject): GeoObjects;
    splice(index: number, number: number): GeoObjectCollection;
  }

  declare var GeoObjects: GeoObjectsStatic;
}
