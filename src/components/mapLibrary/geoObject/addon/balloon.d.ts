namespace ymaps.geoObject.addon {
  interface Balloon {
    get(geoObject: interfaces.IGeoObject): interfaces.IPopupManager;
  }

  declare var balloon: Balloon;
}
