module ymaps {
  export module panorama {
    export class Base extends interfaces.IPanorama {
      getAngularBBox(): void;
      getConnectionArrows(): interfaces.IPanoramaConnectionArrow[];
      getConnectionMarkers(): interfaces.IPanoramaConnectionMarker[];
      getConnections(): interfaces.IPanoramaConnectionMarker[];
      getCoordSystem(): interfaces.ICoordSystem;
      getDefaultDirection(): number[];
      getDefaultSpan(): number[];
      getGraph(): null; //?? it`s ok?
      getMarkers(): interfaces.IPanoramaMarker[];
      getName(): string;
      getPosition(): void;
      getTileLevels(): void;
      validate(): void;
      static createPanorama(params: Params): interfaces.IPanorama;
      static getMarkerPositionFromDirection(
        panorama: interfaces.IPanorama,
        direction: number[],
        distance: number
      ): number[];
    }

    export class Params {
      angularBBox: number[];
      coordSystem?: interfaces.ICoordSystem;
      name?: string = '';
      position: number[];
      tileLevels: interfaces.IPanoramaTileLevel[];
      tileSize: number[];
    }
  }
}
