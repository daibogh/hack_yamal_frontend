namespace ymaps.interfaces {
  interface ILayer extends IChildOnMap, ICustomizable, IEventEmitter {
    getBrightness(): number;
    getCopyrights(coords: number[], zoom: number): vow.Promise;
    getZoomRange(point: number[]): vow.Promise;
  }
}
