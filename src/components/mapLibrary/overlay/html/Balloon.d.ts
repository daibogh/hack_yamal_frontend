module ymaps {
  export module overlay {
    export module hotspot {
      export class Balloon extends interfaces.IOverlay {
        constructor(geometry: interfaces.IPixelPointGeometry, data?: object, options?: BalloonOptions);

        getBalloonElement(): HTMLElement;
        getBalloonLayout(): vow.Promise;
        getBalloonLayoutSync(): interfaces.ILayout;
        getElement(): HTMLElement;
        getLayout(): vow.Promise;
        getLayoutSync(): interfaces.ILayout | null;
        getMode(): string;
        getShadowElement(): HTMLElement;
        getShadowLayout(): vow.Promise;
        getShadowLayoutSync(): interfaces.ILayout | null;
        isEmpty(): boolean;
      }

      export class BalloonOptions {
        cursor: string;
        interactivityModel: string = 'default#opaque';
        layout: string | Function;
        offset: Array = [0, 0];
        pane: string = 'balloon';
        shadow: boolean = true;
        shadowLayout: string | Function;
        shadowOffset: Array = [0, 0];
        shadowsPane: Array | string = 'shadows';
        zIndex: number;
      }
    }
  }
}
