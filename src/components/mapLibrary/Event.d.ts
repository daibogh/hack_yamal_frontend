module ymaps {
  export class Event extends ymaps.interfaces.IEvent {
    constructor(originalEvent: object, sourceEvent?: ymaps.interfaces.IEvent);

    callMethod(name: string): object;

    get(name: string): object;

    isDefaultPrevented(): boolean;

    isImmediatePropagationStopped(): boolean;

    isPropagationStopped(): boolean;

    preventDefault(): void;

    stopImmediatePropagation(): void;

    stopPropagation(): void;
  }
}
