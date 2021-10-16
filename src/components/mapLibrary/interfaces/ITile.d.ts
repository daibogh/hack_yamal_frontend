namespace ymaps.interfaces {
  interface ITileStatic {
    new (url: string): ITile;
  }

  interface ITile extends IEventEmitter {
    destroy(): void;
    isReady(): boolean;
  }
}
