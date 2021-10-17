namespace ymaps.hotspot {
  interface ObjectSourceStatic {
    new (
      tileUrlTemplate: string | Function,
      keyTemplate?: string | Function,
      options: ObjectSourceOptions = defaultObjectSourceOptions
    ): ObjectSource;
  }

  interface ObjectSource extends interfaces.IHotspotObjectSource {
    getKey(tileNumber: number[], zoom: number): string;
    getKeyTemplate(): string;
    getTileUrl(tileNumber: number[], zoom: number): string;
    getTileUrlTemplate(): string;
    parseResponse(layer: hotspot.Layer, res: object, callback: Function, tileNumber: number[], zoom: number): void;
    restrict(layer: hotspot.Layer, tileNumber: number[], zoom: number): boolean;
    setKeyTemplate(template: string): void;
    setTileUrlTemplate(template: string): void;
  }

  interface ObjectSourceOptions {
    bounds?: any;
    maxZoom?: number;
    minZoom?: number;
    noCache?: boolean;
  }

  declare var ObjectSource: ObjectSourceStatic;
  declare var defaultObjectSourceOptions: ObjectSourceOptions = {
    bounds: null,
    maxZoom: 0,
    minZoom: 0,
    noCache: false,
  };
}
