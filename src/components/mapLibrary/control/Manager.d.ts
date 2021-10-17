namespace ymaps.control {
  interface ManagerStatic {
    new (
      map: ymaps.Map,
      controls?: string[] | interfaces.IControl[],
      options: ManagerOptions = defaultManagerOptions
    ): Manager;
  }
  interface Manager extends interfaces.ICustomizable, interfaces.ISelectableControl {
    events: event.Manager;
    options: option.Manager;
    state: data.Manager;

    add(control: interfaces.IControl | string, options?: MangerAddOptions = defaultMangerAddOptions): control.Manager;
    each(callback: Function, context: object): Manager;
    get(index: number | string): interfaces.IControl | null;
    getChildElement(control: interfaces.IControl): vow.Promise;
    getContainer(): HTMLElement;
    getMap(): ymaps.Map;
    indexOf(childToFind: string | interfaces.IControl): number;
    remove(control: interfaces.IControl | string): Manager;
  }

  interface ManagerOptions {
    margin?: number;
    pane?: interfaces.IPane;
    states?: string[];
  }

  interface MangerAddOptions {
    float?: string;
    floatIndex?: number;
    position?: MangerAddOptionsPosition;
  }
  interface MangerAddOptionsPosition {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare var Manager: ManagerStatic;
  declare var defaultManagerOptions: ManagerOptions = {
    margin: 10,
    states: ['small', 'medium', 'large'],
  };
  declare var defaultMangerAddOptions: MangerAddOptions = {
    float: 'right',
    floatIndex: 0,
    position: {
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto',
    },
  };
}
