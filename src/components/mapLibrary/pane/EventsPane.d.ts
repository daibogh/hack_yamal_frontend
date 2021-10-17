module ymaps {
  export module pane {
    export class EventsPane extends interfaces.IEventPane {
      constructor(map: Map, params: EventsPaneParameters);
    }

    export class EventsPaneParameters {
      css: object;
      zIndex: number = 0;
    }
  }
}
