namespace ymaps.interfaces {
  interface IEventManager extends IEventTrigger {
    add(types: string | string[], callback: Function, context?: object, priority?: number = 0): IEventManager;
    fire(type: string, event?: ymaps.Event | object): IEventManager;
    getParent(): IEventManager | null;
    group(): IEventGroup;
    once(types: string | string[], callback: Function, context?: object, priority?: number = 0): IEventManager;
    remove(types: string | string[], callback: Function, context?: object, priority?: number = 0): IEventManager;
    setParent(parent: IEventManager | null): void;
  }
}
