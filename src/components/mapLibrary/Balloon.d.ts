module ymaps {
  export class Balloon implements interfaces.IBalloon, Popup {
    constructor(map: ymaps.Map, options?: BalloonOptions);
  }

  export class BalloonOptions {
    autoPan: boolean = true;
    autoPanCheckZoomRange: boolean = false;
    autoPanDuration: number = 500;
    autoPanMargin: number | number[] = 34;
    autoPanUseMapMargin: boolean = true;
    closeButton: boolean = true;
    closeTimeout: number = 700;
    contentLayout: string | Function;
    interactivityModel: string;
    layout: string | Function = 'islands#balloon';
    maxHeight: number;
    maxWidth: number;
    minHeight: number;
    minWidth: number;
    offset: number[];
    openTimeout: number = 150;
    pane: string = 'balloon';
    panelContentLayout: string | Function = null;
    panelMaxHeightRatio: number;
    panelMaxMapArea: number;
    shadow: boolean = true;
    shadowLayout: string | Function;
    shadowOffset: number[];
    zIndex: string;
  }
}
