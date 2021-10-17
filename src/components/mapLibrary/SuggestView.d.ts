module ymaps {
  export class SuggestView implements interfaces.ICustomizable, interfaces.IEventEmitter {
    constructor(element: HTMLElement | string, options?: SuggestViewOptions);

    state: data.Manager;

    destroy(): void;
  }

  export class SuggestViewOptions {
    boundedBy: number[][];
    container: HTMLElement;
    layout: string | interfaces.ISuggestViewLayout = 'islands#suggestView';
    offset: number[];
    provider: string | interfaces.ISuggestProvider = 'yandex#map';
    results: number = 5;
    width: number;
    zIndex: number = 40000;
  }
}
