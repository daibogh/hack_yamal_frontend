namespace ymaps.clusterer {
  interface HintStatic {
    new (clusterer: Clusterer): Hint;
  }
  interface Hint extends interfaces.IHintManager {}

  declare var Hint: HintStatic;
}
