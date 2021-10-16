module ymaps {
  export module util {
    export class Dragger extends interfaces.IEventEmitter {
      constructor(params?: DraggerParams);

      destroy(): void;
      isDragging(): boolean;
      start(event: interfaces.IDomEvent): void;
      stop(): void;
    }

    export class DraggerParams {
      autoStartElement: HTMLElement | interfaces.IDomEventEmitter;
      byRightButton: boolean = false;
      tremor: number = 3;
    }
  }
}
