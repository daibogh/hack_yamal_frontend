module ymaps {
  export class Clusterer
    implements interfaces.IChildOnMap, interfaces.ICustomizable, interfaces.IEventEmitter, interfaces.IParentOnMap {
    constructor(options?: ClustererOptions);

    events: ymaps.interfaces.IEventManager;
    balloon: clusterer.Balloon;
    balloonclose: any;
    balloonopen: any;
    hint: any;
    properties: interfaces.IDataManager;
    state: data.Manager;
    
    add(objects: interfaces.IGeoObject | interfaces.IGeoObject[]);
    createCluster(center: number[], geoObjects: interfaces.IGeoObject[]);
    getBounds(): number[][] | null;
    getClusters(): interfaces.IGeoObject[];
    getGeoObjects(): interfaces.IGeoObject;
    getObjectState(geoObject: interfaces.IGeoObject): object;
    remove(objects: interfaces.IGeoObject | interfaces.IGeoObject[]);
    removeAll(): Clusterer;
    getOverlay(): ymaps.vow.Promise;
    getOverlaySync(): ymaps.interfaces.IOverlay|null;
    getMap(): ymaps.Map;
    getParent(): ymaps.interfaces.IParentOnMap|null;
    setParent(parent: ymaps.interfaces.IParentOnMap|null): ymaps.interfaces.IChildOnMap;
  }

  export class ClustererOptions {
    onClickIds?:string[];
    clusterBalloonItemContentLayoutTemplate?:string;
    gridSize?: number = 64;
    groupByCoordinates?: boolean = false;
    hasBalloon?: boolean = true;
    hasHint?: boolean = true;
    margin?: number | number[] = 10;
    maxZoom?: number[] = Infinity;
    minClusterSize?: number = 2;
    preset?: string;
    showInAlphabeticalOrder?: boolean = false;
    useMapMargin?: boolean = true;
    viewportMargin?: number | number[] = 128;
    zoomMargin?: number | number[] = 0;
    clusterIconLayout?:string;
    clusterIconPieChartRadius?:number;
    clusterIconPieChartCoreRadius?:number;
    clusterIconPieChartStrokeWidth?:number;
    clusterDisableClickZoom?: boolean;
    clusterOpenBalloonOnClick?:boolean;
    clusterBalloonPanelMaxMapArea?:number;
    clusterBalloonContentLayoutWidth?:number;
    clusterBalloonLeftColumnWidth?:number;
    clusterBalloonItemContentLayout?:Function;
  }
}
