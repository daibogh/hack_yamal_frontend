namespace ymaps.behavior {
  interface RulerStatic {
    new (options?: RulerOptions = defaultRulerOptions): Ruler;
  }
  interface Ruler extends ymaps.interfaces.IBehavior {
    geometry: geometry.LineString;
    close(): boolean;
    getState(): string;
    setState(state: string): any;
  }

  interface RulerOptions {
    balloonAutoPan?: boolean;
    balloonAutoPanUseMapMargin?: boolean;
  }

  declare var Ruler: RulerStatic;
  declare var defaultRulerOptions: RulerOptions = {
    balloonAutoPan: true,
    balloonAutoPanUseMapMargin: true,
  };
}
