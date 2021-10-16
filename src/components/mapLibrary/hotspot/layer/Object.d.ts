namespace ymaps.hotspot.layer {
  interface ObjectStatic {
    new (shape: interfaces.IShape, feature: object, options: object): Object;
  }
  interface Object extends interfaces.IHotspotLayerObject {}

  declare var Object: ObjectStatic;
}
