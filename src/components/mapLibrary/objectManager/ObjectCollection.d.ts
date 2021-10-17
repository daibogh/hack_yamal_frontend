namespace ymaps.objectManager {
  interface ObjectCollection extends interfaces.ICollection, interfaces.ICustomizable {
    balloon: Balloon;
    hint: Hint;
    options: option.Manager;
    overlays: OverlayCollection;

    add(data: object | object[] | string): ObjectCollection;
    each(callback: Function, context: object): void;
    getAll(): object[];
    getById(id: number): object | null;
    getLength(): number;
    getObjectManager(): ObjectManager;
    remove(data: object | object[] | string): ObjectCollection;
    removeAll(): ObjectCollection;
    setObjectOptions(objectId: object, options: object): ObjectCollection;
  }
}
