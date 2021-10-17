namespace ymaps.interfaces {
  interface IDomEventStatic {
    new (originalEvent: object): IDomEvent;
  }
  interface IDomEvent extends IEvent {
    get(name: string): object;
    getSourceEvent(): IDomEvent;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
  }
}
