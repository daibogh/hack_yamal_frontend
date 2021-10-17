namespace ymaps.layer.tileContainer {
  interface CanvasContainerStatic {
    new (layer: interfaces.ILayer, options?: CanvasContainerOptions = defaultCanvasContainerOptions): CanvasContainer;
  }

  interface CanvasContainer extends interfaces.IChildOnMap {
    getMap(): Map;
    getTile(tileNumber: number[], tileZoom: number, priority: number): interfaces.ICanvasTile;
  }

  interface CanvasContainerOptions {
    notFoundTile?: string | null;
    tileClass?: string | interfaces.ICanvasTile;
    tileTransparent?: boolean;
  }

  declare var CanvasContainer: CanvasContainerStatic;
  declare var defaultCanvasContainerOptions: CanvasContainerOptions = {
    notFoundTile: null,
    tileClass: 'default#canvas',
    tileTransparent: false,
  };
}
