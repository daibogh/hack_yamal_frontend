namespace ymaps.geometry.pixel {
  interface MultiLineStringStatic {
    new (coordinates: number[][][], metaData?: object): MultiLineString;
  }
  interface MultiLineString extends interfaces.IPixelMultiLineGeometry {}

  declare var MultiLineString: MultiLineStringStatic;
}
