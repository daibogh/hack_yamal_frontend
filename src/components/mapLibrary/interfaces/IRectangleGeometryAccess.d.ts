namespace ymaps.interfaces {
  interface IRectangleGeometryAccess extends IFreezable {
    contains(position: number[]): boolean;
    getClosest(anchorPosition: number[]): GetClosestResult;
    getCoordinates(): number[][];
    setCoordinates(coordinates: number[][]): IRectangleGeometryAccess;
  }

  interface GetClosestResult {
    position: number[];
    distance: number;
  }
}
