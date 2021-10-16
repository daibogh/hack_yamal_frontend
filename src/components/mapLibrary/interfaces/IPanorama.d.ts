namespace ymaps.interfaces {
  interface IPanorama {
    getAngularBBox(): number[];
    getConnectionArrows(): IPanoramaConnectionArrow[];
    getConnectionMarkers(): IPanoramaConnectionMarker[];
    getCoordSystem(): ICoordSystem;
    getDefaultDirection(): number[];
    getDefaultSpan(): number[];
    getGraph(): IPanoramaGraph | null;
    getMarkers(): IPanoramaMarker[];
    getName(): string;
    getPosition(): number[];
    getTileLevels(): IPanoramaTileLevel[];
    getTileSize(): number[];
  }
}
