module ymaps {
  export class Hint implements interfaces.IHint, Popup {
    constructor(map: Map, options?: HintOptions);
  }

  export class HintOptions {
    closeTimeout: number = 700;
    contentLayout: string | Function;
    fitPane: boolean = true;
    holdByMouse: boolean = true;
    interactivityModel: string;
    layout: string | Function = 'islands#hint';
    offset: number[];
    openTimeout: number = 150;
    pane: string = 'outerHint';
    zIndex: string;
  }
}
