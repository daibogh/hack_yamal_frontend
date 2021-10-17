namespace ymaps.geoObject {
  interface SequenceStatic {
    new (feature?: SequenceFeatures, options?: object): Sequence;
  }
  interface Sequence extends interfaces.IGeoObject, interfaces.IGeoObjectSequence {}

  interface SequenceFeatures {
    children?: interfaces.IGeoObject[];
    geometry?: interfaces.IGeometry | object;
    properties?: interfaces.IDataManager | object;
  }

  declare var Sequence: SequenceStatic;
}
