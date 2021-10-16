module ymaps {
  export class RemoteObjectManager
    implements interfaces.ICustomizable, interfaces.IEventEmitter, interfaces.IGeoObject, interfaces.IParentOnMap {
    constructor(urlTemplate: string, options?: RemoteObjectManagerOptions);

    clusters: objectManager.ClusterCollection;
    objects: objectManager.ObjectCollection;

    getBounds(): number[][] | null;
    getObjectState(id: object): RemoteObjectManagerObjectState;
    getPixelBounds(): number[][] | null;
    getTileUrl(): string | null;
    getUrlTemplate(): string;
    reloadData(): void;
    setFilter(filterFunction: Function | string): void;
    setUrlTemplate(urlTemplate: string): void;
  }

  export class RemoteObjectManagerOptions {
    loadTileSize: number = 256;
    paddingParamName: boolean | string = 'callback';
    paddingTemplate: string = null;
    splitRequests: boolean = false;
    syncOverlayInit: boolean = false;
  }

  export class RemoteObjectManagerObjectState {
    found: boolean;
    isShown: boolean;
    isFilteredOut: boolean;
  }
}
