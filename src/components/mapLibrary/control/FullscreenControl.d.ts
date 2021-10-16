namespace ymaps.control {
  interface FullscreenControlStatic {
    new (parameters: FullscreenControlParameters = defaultFullscreenControlParameters): FullscreenControlStatic;
  }
  interface FullscreenControl extends Button {
    state: ymaps.data.Manager;

    enterFullscreen(): void;
    exitFullscreen(): void;
  }

  interface FullscreenControlParameters {
    data?: FullscreenControlParametersData;
    options?: FullscreenControlParametersOptions;
    state?: FullscreenControlParametersState;
  }

  interface FullscreenControlParametersData {
    title?: string;
  }

  interface FullscreenControlParametersOptions {
    adjustMapMargin?: boolean;
    float?: string;
    floatIndex?: number;
    layout?: string | interfaces.ISelectableControlLayout;
    maxWidth?: number | number[];
    position?: FullscreenControlParametersOptionsPosition;
    visible?: boolean;
  }

  interface FullscreenControlParametersOptionsPosition {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  interface FullscreenControlParametersState {
    enabled?: boolean;
    selected?: boolean;
  }

  declare var FullscreenControl: FullscreenControlStatic;
  declare var defaultFullscreenControlParameters: FullscreenControlParameters = {
    options: {
      adjustMapMargin: false,
      float: 'right',
      floatIndex: 300,
      maxWidth: 28,
      visible: true,
      position: {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
      },
    },
    state: {
      enabled: true,
      selected: false,
    },
  };
}
