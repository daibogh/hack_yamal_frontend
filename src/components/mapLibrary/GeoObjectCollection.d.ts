module ymaps {
  export class GeoObjectCollection implements interfaces.IGeoObject, interfaces.IGeoObjectCollection {
    //??
    constructor(feature?: GeoObjectCollectionFeature, options?: object); //options GeoObject
   
    events: ymaps.interfaces.IEventManager;

    add(child: interfaces.IGeoObject): GeoObjectCollection;
    each(callback: Function, context?: object): void;
    getBounds(): number[][] | null;
    getIterator(): interfaces.IIterator;
    getLength(): number;
    getPixelBounds(): number[][] | null;
    remove(child: interfaces.IGeoObject): GeoObjectCollection;
    removeAll(): GeoObjectCollection;
    set(index: number, child: interfaces.IGeoObject): GeoObjectCollection;
    splice(index: number, number: number): GeoObjectCollection;
    toArray(): interfaces.IGeoObject[];
    getOverlay(): ymaps.vow.Promise;
    getOverlaySync(): ymaps.interfaces.IOverlay|null;
    getMap(): ymaps.Map;
    getParent(): ymaps.interfaces.IParentOnMap|null;
    setParent(parent: ymaps.interfaces.IParentOnMap|null): ymaps.interfaces.IChildOnMap;
  }

  export class GeoObjectCollectionFeature {
    children: interfaces.IGeoObject[];
    geometry: interfaces.IGeometry | object;
    properties: interfaces.IDataManager | object;
  }
}
