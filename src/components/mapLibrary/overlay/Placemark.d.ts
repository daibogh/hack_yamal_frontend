module ymaps {
  export module overlay {
    export class Placemark extends interfaces.IOverlay {
      constructor(geometry: interfaces.IPixelPointGeometry, data?: object, options?: PlacemarkOptions);

      getElement(): HTMLElement;
      getIconElement(): HTMLElement;
      getIconLayout(): vow.Promise;
      getIconLayoutSync(): interfaces.ILayout | null;
      getLayout(): vow.Promise;
      getLayoutSync(): interfaces.ILayout | null;
      getShadowElement(): HTMLElement;
      getShadowLayout(): vow.Promise;
      getShadowLayoutSync(): interfaces.ILayout | null;
    }

    export class PlacemarkOptions {
      cursor: string;
      interactive: boolean = true;
      interactivityModel: string = 'default#geoObject';
      layout: string | Function;
      offset: Array = [0, 0];
      pane: string = 'places';
      shadow: boolean = false;
      shadowLayout: string | Function;
      shadowOffset: Array = [0, 0];
      shadowsPane: string | Array = 'shadows';
      zIndex: number;
    }
  }
}
