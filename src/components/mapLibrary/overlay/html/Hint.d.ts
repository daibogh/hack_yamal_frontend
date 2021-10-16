module ymaps {
  export module overlay {
    export module hotspot {
      export class Hint extends interfaces.IOverlay {
        constructor(geometry: interfaces.IPixelPointGeometry, data?: object, options?: HintOptions);

        getElement(): HTMLElement;
        getLayout(): vow.Promise;
        getLayoutSync(): interfaces.ILayout | null;
        isEmpty(): boolean;
      }

      export class HintOptions {
        cursor: string;
        interactivityModel: string = 'default#opaque';
        layout: string | interfaces.ILayout;
        pane: string = 'outerHint';
        zIndex: number;
      }
    }
  }
}
