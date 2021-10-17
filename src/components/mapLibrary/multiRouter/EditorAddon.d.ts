namespace ymaps.multiRouter {
  interface EditorAddon extends interfaces.ICustomizable, interfaces.IEventEmitter {
    state: data.Manager;

    isActive(): boolean;
    start(state: object): void;
    stop(): void;
  }
}
