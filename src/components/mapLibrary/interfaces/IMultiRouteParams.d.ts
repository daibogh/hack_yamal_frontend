namespace ymaps.interfaces {
  interface IMultiRouteParams {
    avoidTrafficJams?: boolean;
    boundedBy?: number[][] | null;
    requestSendInterval?: string | number;
    results?: number;
    reverseGeocoding?: boolean;
    routingMode?: 'auto' | 'masstransit' | 'pedestrian' | 'bicycle';
    searchCoordOrder?: 'longlat' | 'latlong';
    strictBounds?: boolean;
    viaIndexes?: number[];
  }
}
