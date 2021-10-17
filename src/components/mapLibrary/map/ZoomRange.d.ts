namespace ymaps.map {
  interface ZoomRangeStatic {
    new (map: ymaps.Map, constraints: number[]): ZoomRange;
  }
  interface ZoomRange extends interfaces.IEventEmitter {
    get(coords?: number[]): vow.Promise;
    getCurrent(): number[];
  }

  declare var ZoomRange: ZoomRangeStatic;
}
