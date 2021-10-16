namespace ymaps.interfaces {
  interface IPanoramaMarker {
    properties: data.Manager;

    getIconSet(): vow.Promise;
    getPanorama(): IPanorama;
    getPosition(): number[];
  }
}
