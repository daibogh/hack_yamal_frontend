namespace ymaps.interfaces {
  interface ILineStringGeometryAccess extends IFreezable {
    get(index: number): number[];
    getChildGeometry(index: number): IPointGeometryAccess;
    getClosest(anchorPosition: number[]): IGetClosestResult;
    getCoordinates(): number[][];
    getLength(): number;
    insert(index: number, coordinates: number[]): ILineStringGeometryAccess;
    remove(index: number): number[];
    set(index: number, coordinates: number[]): ILineStringGeometryAccess;
    setCoordinates(coordinates: number[][]): ILineStringGeometryAccess;
    splice(index: number, number: number): number[][];
  }

  interface IGetClosestResult {
    position: number[];
    distance: number;
    closestPointIndex: number;
    nextPointIndex?: number;
    prevPointIndex?: number;
  }
}
