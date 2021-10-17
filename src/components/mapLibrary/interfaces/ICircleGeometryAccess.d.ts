namespace ymaps.interfaces {
  interface ICircleGeometryAccess extends IFreezable {
    contains(position: number[]): boolean;
    getClosest(anchorPosition: number[]): GetClosestResult;
    getCoordinates(): number[] | null;
    getRadius(): number;
    setCoordinates(coordinates: number[] | null): ICircleGeometryAccess;
    setRadius(radius: number): ICircleGeometryAccess;
  }

  interface GetClosestResult {
    position: number[];
    distance: number;
  }
}
