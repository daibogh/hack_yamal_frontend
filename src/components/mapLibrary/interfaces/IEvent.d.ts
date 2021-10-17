namespace ymaps.interfaces {
  interface IEvent {
    allowMapEvent(): void;
    callMethod(name: string): void;
    get(name: string): object;
    getSourceEvent(): IEvent | null;
    isDefaultPrevented(): boolean;
    isImmediatePropagationStopped(): boolean;
    isMapEventAllowed(): boolean;
    isPropagationStopped(): boolean;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): vois;
  }
}
