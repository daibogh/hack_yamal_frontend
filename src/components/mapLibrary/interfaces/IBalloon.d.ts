namespace ymaps.interfaces {
  interface IBalloon extends IPopup {
    autoPan(): vow.Promise;
  }
}
