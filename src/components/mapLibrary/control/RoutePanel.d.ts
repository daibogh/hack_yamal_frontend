namespace ymaps.control {
  interface RoutePanelStatic {
    new (parameters?: RoutePanelParameters = defaultRoutePanelParameters): RoutePanel;
  }
  interface RoutePanel extends interfaces.IControl, interfaces.ICustomizable {
    routePanel: interfaces.IRoutePanel;
  }

  interface RoutePanelParameters {
    options?: RoutePanelParametersOptions;
    state?: object;
  }

  interface RoutePanelParametersOptions {
    autofocus?: boolean;
    float?: string;
    floatIndex?: number;
    maxWidth?: string;
    position?: RouteButtonParametersOptionsPosition;
    showHeader?: boolean;
    title?: string;
    visible?: boolean;
  }

  interface RoutePanelParametersOptionsPosition {
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
    left?: number | string;
  }

  declare var RoutePanel: RoutePanelStatic;
  declare var defaultRoutePanelParameters: RoutePanelParameters = {
    options: {
      autofocus: true,
      float: 'left',
      floatIndex: 0,
      maxWidth: '210px',
      showHeader: false,
      title: 'Routes',
      visible: true,
    },
  };
}
