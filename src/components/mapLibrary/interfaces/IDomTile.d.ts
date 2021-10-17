namespace ymaps.interfaces {
  interface IDomTileStatic {
    new (url: string): IDomTile;
  }

  interface IDomTile extends ITile {
    renderAt(context: HTMLElement, clientBounds: number[][], animate: boolean): void;
  }
}
