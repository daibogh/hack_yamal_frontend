namespace ymaps.geometry.pixel {
  interface PointStatic {
    new (position: number[] | null, metaData?: object): Point;
  }
  interface Point extends interfaces.IPixelPointGeometry {}

  declare var Point: PointStatic;
}
