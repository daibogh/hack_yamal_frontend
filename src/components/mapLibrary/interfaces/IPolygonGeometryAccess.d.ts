namespace ymaps.interfaces {
  interface IPolygonGeometryAccess extends IFreezable {
    contains(position: number[]): boolean;
    get(index: number): number[][];
    getChildGeometry(index: number): ILinearRingGeometryAccess;
    getClosest(anchorPosition: number[]): GetClosestResult;
    getCoordinates(): number[][][];
    getFillRule(): string; 
    getLength(): number;
    insert(index: number, path: number[][]): IPolygonGeometryAccess;
    remove(index: number): IPolygonGeometryAccess;
    set(index: number, path: number[][]): IPolygonGeometryAccess;
    setCoordinates(coordinates: number[][][]): IPolygonGeometryAccess;
    setFillRule(fillRule: string): IPolygonGeometryAccess; 
    splice(index: number, number: number): ILinearRingGeometryAccess[];
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
