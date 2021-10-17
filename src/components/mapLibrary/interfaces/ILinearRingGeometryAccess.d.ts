namespace ymaps.interfaces {
  interface ILinearRingGeometryAccess extends IFreezable {
    contains(position: number[]): boolean;
    get(index: number): number[];
    getChildGeometry(index: number): IPointGeometryAccess;
    getClosest(anchorPosition: number[]): GetClosestResult;
    getCoordinates(): number[][];
    getFillRule(): string;
    getLength(): number;
    insert(index: number, coordinates: number): ILinearRingGeometryAccess;
    remove(index: number): number[];
    set(index: number, coordinates: number[]): ILinearRingGeometryAccess;
    setCoordinates(coordinates: number[][]): ILinearRingGeometryAccess;
    setFillRule(fillRule: string): ILinearRingGeometryAccess;
    splice(index: number, number: number): number[][];
  }

  interface GetClosestResult {
    position: number[];
    distance: number;
    closestPointIndex: number;
    nextPointIndex?: number;
    prevPointIndex?: number;
  }
}
