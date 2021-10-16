namespace ymaps.map.addon {
  interface Hint {
    get(map: Map): interfaces.IPopupManager;
  }

  declare var hint: Hint;
}
