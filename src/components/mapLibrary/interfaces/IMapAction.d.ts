namespace ymaps.interfaces {
  interface IMapAction extends IEventEmitter {
    begin(mapActionManager: map.action.Manager): void;
    end(): void;
  }
}
