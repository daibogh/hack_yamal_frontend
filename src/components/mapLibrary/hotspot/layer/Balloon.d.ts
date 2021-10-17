namespace ymaps.hotspot.layer {
  interface BalloonStatic {
    new (hotspotLayer?: object): Balloon;
  }

  interface Balloon extends interfaces.IBalloonManager {
    open(position?: number[], data?: object, options?: object): vow.Promise;
  }

  declare var Balloon: BalloonStatic;
}
