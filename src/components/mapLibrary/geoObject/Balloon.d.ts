namespace ymaps.geoObject {
  interface BalloonStatic {
    new (geoObject: object): Balloon;
  }
  interface Balloon extends interfaces.IBalloonManager {
    open(position?: number[], data?: object, options?: object): vow.Promise;
    setData(data?: object): vow.Promise;
  }

  declare var Balloon: BalloonStatic;
}
