namespace ymaps.interfaces {
  interface IPixelGeometry extends IBaseGeometry {
    equals(geometry: IPixelGeometry): boolean;
    getMetaData(): object;
    scale(factor: number): IPixelGeometry;
    shift(offset: number[]): IPixelGeometry;
  }
}
