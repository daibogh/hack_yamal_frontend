module ymaps {
  export class GeoQueryResult extends interfaces.IPromiseProvider {
    constructor(source: object);

    add(source: object): GeoQueryResult;
    addEvents(events: string | string[], callback: Function, context: object): GeoQueryResult;
    addTo(collection: interfaces.ICollection): GeoQueryResult;
    addToMap(map: Map): GeoQueryResult;
    applyBoundsToMap(map: Map, options?: ApplyBoundsToMapOptions): GeoQueryResult;
    clusterize(options?: object): Clusterer;
    each(callback: Function, context: object): GeoQueryResult;
    get(index: number): interfaces.IGeoObject;
    getBounds(): number[][] | null;
    getCenter(map: Map): number[];
    getCentralObject(map: Map): interfaces.IGeoObject | null;
    getClosestTo(object: object): interfaces.IGeoObject | null;
    getExtreme(key: 'top' | 'right' | 'bottom' | 'left'): number;
    getExtremeObject(key: 'top' | 'right' | 'bottom' | 'left'): interfaces.IGeoObject;
    getGlobalPixelBounds(map: Map): number[][] | null;
    getGlobalPixelCenter(map: Map): number[];
    getIterator(): interfaces.IIterator;
    getLength(): number;
    getMaxZoom(map: Map, options?: GetMaxZoomOptions): number;
    getParent(): GeoQueryResult | null;
    indexOf(item: interfaces.IGeoObject): number;
    intersect(result: GeoQueryResult): GeoQueryResult;
    isReady(): boolean;
    map(callback: Function, context?: object): GeoQueryResult;
    remove(objects: object): GeoQueryResult;
    removeEvents(events: string | string[], callback: Function, context: object): void;
    removeFrom(collection: interfaces.ICollection): GeoQueryResult;
    removeFromMap(map: Map): GeoQueryResult;
    reverse(): GeoQueryResult;
    search(condition: string | Function): GeoQueryResult;
    searchContaining(object: object): GeoQueryResult;
    searchInside(object: interfaces.IGeoObject | interfaces.IGeometry | Map): GeoQueryResult;
    searchIntersect(
      object: interfaces.IGeoObject | interfaces.IGeometry | Map,
      options?: SearchIntersectOptions
    ): GeoQueryResult;
    setOptions(key: string | object, value?: object): GeoQueryResult;
    setProperties(path: string, value: object): GeoQueryResult;
    slice(begin: number, end?: number): GeoQueryResult;
    sort(comparator: string | Function): void;
    sortByDistance(
      object: interfaces.IGeoObject | interfaces.IGeometry | Map | number[] | number[][] | JSON
    ): GeoQueryResult;
    then(onFulfill?: Function, onReject?: Function, context?: object): GeoQueryResult;
    unsetOptions(keys: string | string[]): GeoQueryResult;
    unsetProperties(path: string): GeoQueryResult;
  }

  export class ApplyBoundsToMapOptions {
    checkZoomRange: boolean = false;
    duration: number = 0;
    preciseZoom: boolean = false;
    timingFunction: string = 'linear';
    useMapMargin: boolean = true;
    zoomMargin: number | number[] = 0;
  }

  export class GetMaxZoomOptions {
    useMapMargin: boolean = true;
  }

  export class SearchIntersectOptions {
    considerOccurance: boolean = true;
  }
}
