module ymaps {
  export module pane {
    export class MovablePane extends interfaces.IContainerPane {
      constructor(map: Map, params: MovablePaneParameters);
    }

    export class MovablePaneParameters {
      css: object;
      margin: number = 0;
      overflow: 'visible' | 'hidden' = 'hidden';
      zIndex: number = 0;
    }
  }
}
