namespace ymaps.interfaces {
  interface IPixelPolygonGeometry extends IPixelGeometry {
    contains(position: number[]): boolean;
    getClosest(anchorPosition: number[]): GetClosestResult;
    getCoordinates(): number[][][];
    getFillRule(): string;
    getLength(): number;
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
