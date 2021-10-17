module ymaps {
  export module pane {
    export class StaticPane extends interfaces.IContainerPane {
      constructor(map: Map, params: StaticPaneParameters);
    }

    export class StaticPaneParameters {
      css: object;
      margin: number = 0;
      overflow: 'visible' | 'hidden' = 'hidden';
      zIndex: number = 0;
    }
  }
}
