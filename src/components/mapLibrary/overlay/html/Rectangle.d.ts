module ymaps {
  export module overlay {
    export module hotspot {
      export class Rectangle extends interfaces.IOverlay {
        constructor(geometry: interfaces.IPixelRectangleGeometry, data?: object, options?: RectangleOptions);

        getElement(): HTMLElement;
        getLayout(): vow.Promise;
        getLayoutSync(): interfaces.ILayout | null;
      }

      export class RectangleOptions {
        cursor: string;
        fillColor: string;
        fillImageHref: string;
        fillMethod: 'stretch' | 'tile' = 'stretch';
        fillOpacity: number;
        interactivityModel: string = 'default#geoObject';
        opacity: number;
        pane: string = 'areas';
        strokeColor: string;
        strokeStyle: number[] | string;
        strokeWidth: number;
        zIndex: number;
        borderRadius: number;
      }
    }
  }
}
