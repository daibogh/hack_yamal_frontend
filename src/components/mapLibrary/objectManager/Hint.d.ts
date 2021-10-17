namespace ymaps.objectManager {
  interface HintStatic {
    new (collection: any): Hint;
  }

  interface Hint extends interfaces.IHintManager {
    close(force?: boolean = false): vow.Promise;
    getData(): object | null;
    isOpen(id: object): boolean;
    open(objectId: object, position?: number[]): vow.Promise;
    setData(objectData: object): vow.Promise;
  }

  declare var Hint: HintStatic;
}
