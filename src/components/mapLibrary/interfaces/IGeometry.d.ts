namespace ymaps.interfaces {
  interface IGeometry extends IBaseGeometry, ICustomizable {
    getBounds(): number[][] | null;
    getMap(): ymaps.Map | null;
    getPixelGeometry(options?: object): IPixelGeometry;
    setMap(map: ymaps.Map | null): void;
  }
}
