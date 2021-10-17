namespace ymaps.interfaces {
  interface IPanoramaTileLevel {
    getImageSize(): number[];
    getTileUrl(x: number, y: number): string;
  }
}
