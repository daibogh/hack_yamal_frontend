namespace ymaps.objectManager {
  interface BalloonStatic {
    new (collection: any): Balloon;
  }

  interface Balloon extends interfaces.IBalloonManager {
    close(force: boolean = false): vow.Promise;
    getData(): object | null;
    isOpen(id: object): boolean;
    open(objectId: object, anchorPixelPosition: any): vow.Promise;
    setData(objectData: object): vow.Promise;
  }

  declare var Balloon: BalloonStatic;
}
