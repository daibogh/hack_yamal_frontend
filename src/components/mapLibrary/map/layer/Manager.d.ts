namespace ymaps.map.layer {
  interface ManagerStatic {
    new (map: ymaps.Map, options: ManagerOptions = defaultManagerOptions): Manager;
  }
  interface Manager extends interfaces.ILayer, interfaces.IMapObjectCollection {
    each(callback: Function, context?: object): void;
  }

  interface ManagerOptions {
    trafficImageZIndex?: number;
    trafficInfoZIndex?: number;
    trafficJamZIndex?: number;
  }

  declare var Manager: ManagerStatic;
  declare var defaultManagerOptions: ManagerOptions = {
    trafficImageZIndex: 201,
    trafficInfoZIndex: 1,
    trafficJamZIndex: 0,
  };
}
