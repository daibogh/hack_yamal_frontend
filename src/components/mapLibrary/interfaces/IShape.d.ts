namespace ymaps.interfaces {
  interface IShape {
    contains(position: number[]): boolean;
    equals(shape: IShape): boolean;
    getBounds(): number[][] | null;
    getGeometry(): IPixelGeometry;
    getType(): string;
    scale(factor: number): IShape;
    shift(offset: number[]): IShape;
  }
}
