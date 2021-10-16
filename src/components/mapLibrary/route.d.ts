module ymaps {
  export function route(points: object[], params?: RouteParameters): vow.Promise;

  export class RouteParameters {
    avoidTrafficJams: boolean = false;
    boundedBy: number[][];
    mapStateAutoApply: boolean = false;
    multiRoute: boolean = false;
    reverseGeocoding: boolean = false;
    routingMode: 'auto' | 'masstransit' | 'pedestrian' = 'auto';
    searchCoordOrder: string;
    strictBounds: boolean = true;
    useMapMargin: boolean = true;
    viaIndexes: number[] = [];
    zoomMargin: number | number[] = 0;
  }
}
