module ymaps {
  export class ObjectManager
    implements interfaces.ICustomizable, interfaces.IEventEmitter, interfaces.IGeoObject, interfaces.IParentOnMap {
    constructor(options?: ObjectManagerOptions);

    clusters: objectManager.ClusterCollection;
    objects: objectManager.ObjectCollection;
    events: ymaps.interfaces.IEventManager;

    add(objects: object | object[] | string): ObjectManager;
    getBounds(): number[][] | null;
    getFilter(): string | Function | null;
    getObjectState(id: object): ObjectManagerObjectState;
    getPixelBounds(): number[][] | null;
    remove(objects: object | object[] | string): ObjectManager;
    removeAll(): ObjectManager;
    setFilter(filterFunction: Function | string): void;
    getOverlay(): ymaps.vow.Promise;
    getOverlaySync(): ymaps.interfaces.IOverlay|null;
    getMap(): ymaps.Map;
    getParent(): ymaps.interfaces.IParentOnMap|null;
    setParent(parent: ymaps.interfaces.IParentOnMap|null): ymaps.interfaces.IChildOnMap;
  }

  export class ObjectManagerOptions {
    gridSize?:number;
    clusterize?: boolean = false;
    syncOverlayInit?: boolean = false;
    viewportMargin?: number | number[] = 128;
    clusterIconLayout?:string;
  }

  export interface ObjectManagerObjectState {
    found: boolean;
    isShown: boolean;
    cluster: any;
    isClustered: boolean;
    isFilteredOut: boolean;
  }
}
