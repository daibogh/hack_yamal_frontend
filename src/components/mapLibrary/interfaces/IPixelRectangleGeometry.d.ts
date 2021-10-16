namespace ymaps.interfaces {
  interface IPixelRectangleGeometry extends IPixelGeometry {
    getClosest(anchorPosition: number[]): GetClosestResult;
    getCoordinates(): number[][];
  }

  interface GetClosestResult {
    position: number[];
    distance: number;
    closestPointIndex: number;
    nextPointIndex?: number;
    prevPointIndex?: number;
    pathIndex: number;
  }
}
