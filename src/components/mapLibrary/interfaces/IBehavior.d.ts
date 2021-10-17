namespace ymaps.interfaces {
  interface IBehaviorStatic {
    new (options?: object): IBehavior;
  }

  interface IBehavior extends IChildOnMap, ICustomizable {
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
  }
}
