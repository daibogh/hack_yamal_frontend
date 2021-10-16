namespace ymaps.map {
  interface HintStatic {
    new (map: ymaps.Map): Hint;
  }
  interface Hint extends interfaces.IHintManager {}

  declare var Hint: HintStatic;
}
