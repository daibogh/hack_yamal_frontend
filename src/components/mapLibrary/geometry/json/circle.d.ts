namespace ymaps.geometry.json {
  interface circle extends interfaces.IGeometryJson {
    coordinates: number[] | null;
    radius: number;
    type: string = 'Circle';
  }
}
