namespace ymaps.geometry.json {
  interface polygon extends interfaces.IGeometryJson {
    coordinates: number[][][];
    fillRule: string = 'evenOdd' | 'nonZero';
  }
}
