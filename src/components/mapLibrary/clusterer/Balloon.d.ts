namespace ymaps.clusterer {
  interface BalloonStatic {
    new (clusterer: Clusterer): Balloon;
  }
  interface Balloon extends interfaces.IBalloonManager {
    open: any;
  }

  declare var Balloon: BalloonStatic;
}
