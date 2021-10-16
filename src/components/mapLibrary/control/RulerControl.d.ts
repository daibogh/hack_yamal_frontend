namespace ymaps.control {
  interface RulerControlStatic {
    new (parameters?: RulerControlParameters = defaultRulerControlParameters): RulerControl;
  }
  interface RulerControl extends Button {}

  interface RulerControlParameters {
    data?: object;
    options?: RulerControlParametersOptions;
    state?: object;
  }

  interface RulerControlParametersOptions {
    adjustMapMargin?: boolean;
    position?: RulerControlParametersOptionsPosition;
    scaleLine?: boolean;
    visible?: boolean;
  }

  interface RulerControlParametersOptionsPosition {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare var RulerControl: RulerControlStatic;
  declare var defaultRulerControlParameters: RulerControlParameters = {
    options: {
      adjustMapMargin: false,
      position: {
        top: 'auto',
        right: 10,
        bottom: 30,
        left: 'auto',
      },
      scaleLine: true,
      visible: true,
    },
  };
}
