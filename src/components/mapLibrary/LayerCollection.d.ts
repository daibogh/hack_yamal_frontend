module ymaps {
  export class LayerCollection implements interfaces.ILayer, interfaces.IMapObjectCollection {
    constructor(options?: object);

    add(child: string | interfaces.ILayer): LayerCollection;
    each(callback: Function, context?: object): void;
    getBrightness(): number;
    getCopyrights(coords?: number[], zoom?: number): vow.Promise;
    getZoomRange(coords?: number[]): vow.Promise;
    remove(child: string | interfaces.ILayer): LayerCollection;
    removeAll(): Collection;
  }
}
