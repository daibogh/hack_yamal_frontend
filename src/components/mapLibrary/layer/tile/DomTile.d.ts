namespace ymaps.layer.tile {
  interface DomTileStatic extends ymaps.interfaces.IDomTileStatic {
    new (url: string, options?: DomTileOptions, renderOptions?: DomTileRenderOptions): DomTile;
  }

  interface DomTile extends interfaces.IDomTile {}

  interface DomTileOptions {
    notFoundTile?: string | null = null;
    tileAnimationDuration?: number;
  }

  interface DomTileRenderOptions {
    tileNumber?: number[];
    tileZoom?: number;
  }

  declare var DomTile: DomTileStatic;
}
