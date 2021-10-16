namespace ymaps.layer.tile {
  interface CanvasTileStatic extends ymaps.interfaces.ICanvasTileStatic {
    new (url: string, options?: CanvasTileOptions, renderOptions?: CanvasRenderOptions): CanvasTile;
  }

  interface CanvasTile extends interfaces.ICanvasTile {}

  interface CanvasTileOptions {
    notFoundTile?: string | null = null;
    tileAnimationDuration?: number;
  }

  interface CanvasRenderOptions {
    tileNumber?: number[];
    tileZoom?: number;
  }

  declare var CanvasTile: CanvasTileStatic;
}
