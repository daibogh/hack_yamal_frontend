namespace ymaps.objectManager {
  interface ClusterCollection extends interfaces.ICustomizable, interfaces.IEventEmitter {
    balloon: Balloon;
    hint: Hint;
    options: option.Manager;
    overlays: OverlayCollection;
    state: data.Manager;

    each(callback: Function, context: object);
    getAll(): object[];
    getById(id: string): object | null;
    getIterator(): interfaces.IIterator;
    getLength(): number;
    getObjectManager(): ObjectManager;
    setClusterOptions(objectId: string, options: object): ObjectCollection;
  }
}
