namespace ymaps.map.action {
  interface ManagerStatic {
    new (map: ymaps.Map): Manager;
  }
  interface Manager extends interfaces.IEventEmitter {
    breakTick(): void;
    execute(action: interfaces.IMapAction): void;
    getCurrentState(): GetCurrentStateResult;
    getMap(): ymaps.Map;
    setCorrection(userFunction: Function): void;
    stop(): void;
  }

  interface GetCurrentStateResult {
    isTicking?: boolean;
    tickProgress?: number;
    zoom?: number;
    globalPixelCenter?: number[];
  }

  declare var Manager: ManagerStatic;
}
