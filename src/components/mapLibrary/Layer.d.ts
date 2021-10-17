module ymaps {
  export class Layer implements interfaces.ILayer, interfaces.IParentOnMap, interfaces.IPositioningContext {
    constructor(tileUrlTemplate: string | Function, options?: LayerOptions);

    clientPixelsToNumber(clientPixelPoint: number, tileZoom: number): number[];
    getPane(): interfaces.IPane;
    getTileSize(zoom: number): number[];
    getTileStatus(): GetTileStatus;
    getTileUrl(tileNumber: number[], tileZoom: number): string | null;
    getTileUrlTemplate(): string | Function;
    numberToClientBounds(tileNumber: number[], tileZoom: number): number[][];
    restrict(number: number[], tileZoom: number): number[] | null;
    setTileUrlTemplate(tileUrlTemplate: string | Function): void;
    update(): void;
  }

  export class LayerOptions {
    brightness: number = 0.5;
    notFoundTile: string | null = null;
    pane: string | interfaces.IPane = 'ground';
    projection: object;
    tileSize: number[] = [256, 256];
    tileTransparent: boolean = false;
    zIndex: number;
  }

  export class GetTileStatus {
    readyTileNumber: number;
    totalTileNumber: number;
  }
}
