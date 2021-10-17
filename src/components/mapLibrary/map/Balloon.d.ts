namespace ymaps.map {
  interface BalloonStatic {
    new (map: ymaps.Map): Balloon;
  }
  interface Balloon extends interfaces.IBalloonManager {
    open(position?: number[], data?: object | BallonProperties | string | HTMLElement, options?: object): vow.Promise;
  }

  export class BallonProperties {
    contentHeader?: string;
    contentBody?: string;
    contentFooter?: string;
  }

  declare var Balloon: BalloonStatic;
}
