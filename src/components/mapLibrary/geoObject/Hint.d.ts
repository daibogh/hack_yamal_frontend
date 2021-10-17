namespace ymaps.geoObject {
  interface HintStatic {
    new (geoObject: object): Hint;
  }
  interface Hint extends interfaces.IHintManager {
    open(position?: number[], data?: object, options?: object): vow.Promise;
    setData(data?: object): vow.Promise;
  }

  declare var Hint: HintStatic;
}
