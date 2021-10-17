module ymaps {
  export module overlay {
    export module hotspot {
      export class Placemark extends interfaces.IOverlay {
        constructor(geometry: interfaces.IPixelPointGeometry, data?: object, options?: PlacemarkOptions);
      }

      export class PlacemarkOptions {
        cursor: string;
        interactive: boolean = true;
        interactivityModel: string = 'default#geoObject';
        layout: Function | string;
        offset: Array = [0, 0];
        pane: string = 'places';
        shadow: boolean = false;
        shadowLayout: Function | string;
        shadowOffset: Array = [0, 0];
        shadowsPane: Array | string = 'shadows';
        zIndex: number;
      }
    }
  }
}
