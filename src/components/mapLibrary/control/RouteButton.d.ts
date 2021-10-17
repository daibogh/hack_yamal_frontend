namespace ymaps.control {
  interface RouteButtonStatic {
    new (parameters?: RouteButtonParameters = defaultRouteButtonParameters): RouteButton;
  }

  interface RouteButton extends interfaces.IControl, interfaces.ICustomizable {
    routePanel: interfaces.IRoutePanel;
  }

  interface RouteButtonParameters {
    lazy?: boolean;
    options?: RouteButtonParametersOptions;
    state?: RouteButtonParametersState;
  }

  interface RouteButtonParametersOptions {
    adjustMapMargin?: boolean;
    autofocus?: boolean;
    collapseOnBlur?: boolean;
    float?: 'right' | 'left' | 'none';
    floatIndex?: number;
    popupAnimate?: boolean;
    popupFloat?: boolean;
    popupWidth?: string;
    position?: RouteButtonParametersOptionsPosition;
    size?: 'auto' | 'small' | 'medium' | 'large';
    visible?: boolean;
  }

  interface RouteButtonParametersOptionsPosition {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  interface RouteButtonParametersState {
    expanded?: boolean;
  }

  declare var RouteButton: RouteButtonStatic;
  declare var defaultRouteButtonParameters: RouteButtonParameters = {
    lazy: true,
    options: {
      adjustMapMargin: false,
      autofocus: true,
      collapseOnBlur: true,
      float: 'right',
      floatIndex: 0,
      popupAnimate: true,
      popupWidth: '210px',
      position: {
        bottom: 'auto',
        left: 10,
        right: 'auto',
        top: 108,
      },
      size: 'auto',
      visible: true,
    },
    state: {
      expanded: false,
    },
  };
}
