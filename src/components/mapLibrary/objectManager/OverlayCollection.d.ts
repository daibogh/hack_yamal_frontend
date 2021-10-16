namespace ymaps.objectManager {
  interface OverlayCollection extends interfaces.ICustomizable, interfaces.IEventEmitter {
    each(callback: Function, context: object): void;
    getAll(): object[];
    getById(id: number): object | null;
    getId(overlay: interfaces.IOverlay): number | null;
    getIterator(): interfaces.IIterator;
    getLength(): number;
  }
}
