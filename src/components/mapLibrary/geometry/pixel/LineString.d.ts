namespace ymaps.geometry.pixel {
  interface LineStringStatic {
    new (coordinates: number[][], metaData?: object): LineString;
  }
  interface LineString extends interfaces.IPixelLineStringGeometry {}

  declare var LineString: LineStringStatic;
}
