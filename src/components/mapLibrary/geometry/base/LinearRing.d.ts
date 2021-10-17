namespace ymaps.geometry.base {
  interface LinearRingStatic {
    new (coordinates?: number[][] = [], fillRule?: string = 'evenOdd'): LinearRing;
  }

  interface LinearRing extends interfaces.IBaseLinearRingGeometry {
    events: event.Manager;
  }

  declare var LinearRing: LinearRingStatic;
}
