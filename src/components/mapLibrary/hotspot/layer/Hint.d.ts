namespace ymaps.hotspot.layer {
  interface HintStatic {
    new (hotspotLayer: object): Hint;
  }
  
  interface Hint extends interfaces.IHintManager {
    open(position?: number[], data?: object, options?: object): vow.Promise;
  }

  declare var Hint: HintStatic;
}
