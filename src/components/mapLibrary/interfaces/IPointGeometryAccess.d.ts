namespace ymaps.interfaces {
  interface IPointGeometryAccess {
    getCoordinates(): number[] | null;
    setCoordinates(coordinates: number[] | null): IPointGeometryAccess;
  }
}
