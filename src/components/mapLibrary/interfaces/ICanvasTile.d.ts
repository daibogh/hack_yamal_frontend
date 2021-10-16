namespace ymaps.interfaces {
  interface ICanvasTileStatic {
    new (url: string): ICanvasTile;
  }

  interface ICanvasTile extends ITile {
    renderAt(context: object, canvasSize: number[], bounds: number[][], animate?: boolean = false): void;
  }
}
