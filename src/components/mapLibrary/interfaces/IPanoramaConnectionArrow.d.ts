namespace ymaps.interfaces {
  interface IPanoramaConnectionArrow extends IPanoramaConnection {
    properties: data.Manager;

    getDirection(): number[];
    getPanorama(): IPanorama;
  }
}
