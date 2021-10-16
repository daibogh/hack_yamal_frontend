namespace ymaps.control {
  interface ZoomControlStatic {
    new (parameters?: ZoomControlParameters = defaultZoomControlParameters): ZoomControl;
  }
  interface ZoomControl extends interfaces.IControl, interfaces.ICustomizable {
    getMap(): ymaps.Map;
  }

  interface ZoomControlParameters {
    data?: object;
    options?: ZoomControlParametersOptions;
    state?: object;
  }

  interface ZoomControlParametersOptions {
    adjustMapMargin?: boolean;
    layout?: string | interfaces.IZoomControlLayout;
    position?: ZoomControlParametersOptionsPosition;
    size?: 'small' | 'large' | 'auto';
    visible?: boolean;
    zoomDuration?: number;
    zoomStep?: number;
  }

  interface ZoomControlParametersOptionsPosition {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare var ZoomControl: ZoomControlStatic;
  declare var defaultZoomControlParameters: ZoomControlParameters = {
    options: {
      adjustMapMargin: false,
      position: {
        top: 108,
        right: 'auto',
        bottom: 'auto',
        left: 10,
      },
      size: 'auto',
      visible: true,
      zoomDuration: 200,
      zoomStep: 1,
    },
  };
}
