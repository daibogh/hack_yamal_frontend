namespace ymaps.map {
  interface CopyrightsStatic {
    new (map: ymaps.Map): Copyrights;
  }
  interface Copyrights {
    add(customCopyrights: string | string[] | HTMLElement | HTMLElement[]): interfaces.ICopyrightsAccessor;
    addProvider(provider: interfaces.ICopyrightsProvider): Copyrights;
    get(point?: number[], zoom?: number): vow.Promise;
    getPromoLink(): string;
    removeProvider(provider: interfaces.ICopyrightsProvider): Copyrights;
  }

  declare var Copyrights: CopyrightsStatic;
}
