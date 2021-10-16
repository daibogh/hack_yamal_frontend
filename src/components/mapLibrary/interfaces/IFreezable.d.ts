namespace ymaps.interfaces {
  interface IFreezable {
    events: IEventManager;

    freeze(): IFreezable;
    isFrozen(): boolean;
    unfreeze(): IFreezable;
  }
}
