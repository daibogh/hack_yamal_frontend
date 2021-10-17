namespace ymaps.interfaces {
  interface IPixelMultiLineGeometry extends IPixelGeometry {
    getClosest(anchorPosition: number[]): GetClosestResult;
    getCoordinates(): number[][][];
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
