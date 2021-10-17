module ymaps {
  export module util {
    export module cursor {
      export class Manager {
        constructor(element: HTMLElement);

        events: event.Manager;
        push(
          key: 'arrow' | 'crosshair' | 'grab' | 'grabbing' | 'help' | 'zoom' | 'move' | 'pointer' | 'inherit'
        ): util.cursor.Accessor;
      }
    }
  }
}
