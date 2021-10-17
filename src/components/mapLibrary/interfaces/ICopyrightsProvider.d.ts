namespace ymaps.interfaces {
  interface ICopyrightsProvider extends IEventEmitter {
    getCopyrights(coords: number[], zoom: number): vow.Promise;
    remove(): void;
    setCopyrights(copyrights: string | HTMLElement | string[] | HTMLElement[]): void;
  }
}
