namespace ymaps.control {
  interface ButtonStatic {
    new (parameters: ButtonParameters = defaultButtonParameters): Button;
  }
  interface Button extends interfaces.ICustomizable, interfaces.ISelectableControl {
    data: ymaps.data.Manager;
    state: ymaps.data.Manager;

    getMap(): Map;
  }

  interface ButtonParameters {
    data?: ButtonParametersData;
    options?: ButtonParametersOptions;
    state?: ButtonParametersState;
  }

  interface ButtonParametersData {
    content?: string;
    image?: string;
    title?: string;
  }

  interface ButtonParametersOptions {
    adjustMapMargin: boolean = false;
    float?: string;
    floatIndex?: number;
    layout?: interfaces.ISelectableControl | string; // todo constructor
    maxWidth?: number | number[];
    position?: ButtonParametersOptionsPosition;
    selectOnClick?: boolean;
    size?: string;
    visible?: boolean;
  }

  interface ButtonParametersOptionsPosition {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  interface ButtonParametersState {
    enabled?: boolean;
    selected?: boolean;
  }

  declare var Button: ButtonStatic;
  declare var defaultButtonParameters: ButtonParameters = {
    options: {
      adjustMapMargin: false,
      float: 'right',
      floatIndex: 0,
      maxWidth: 90,
      position: {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
      },
      selectOnClick: true,
      size: 'auto',
      visible: true,
    },
    state: {
      enabled: true,
      selected: false,
    },
  };
}
