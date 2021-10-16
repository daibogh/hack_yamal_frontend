namespace ymaps.map.margin {
  interface ManagerStatic {
    new (map: ymaps.Map): Manager;
  }
  interface Manager extends interfaces.IEventEmitter {
    addArea(screenArea: object): Accessor;
    destroy(): Manager;
    getMargin(): number[];
    getOffset(): number[];
    setDefaultMargin(margin: number | number[]): void;
  }

  declare var Manager: ManagerStatic;
}
