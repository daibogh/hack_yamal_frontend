namespace ymaps.map.addon {
  interface Balloon {
    get(map: Map): interfaces.IPopupManager;
  }

  declare var balloon: Balloon;
}
