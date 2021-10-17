namespace ymaps.control {
  interface RouteEditorStatic {
    new (parameters?: RouteEditorParameters = defaultRouteEditorParameters): RouteEditor;
  }
  interface RouteEditor extends Button {
    getRoute(): router.Route;
  }

  interface RouteEditorParameters {
    data?: RouteEditorParametersData;
    options?: RouteEditorParametersOptions;
    state?: object;
  }

  interface RouteEditorParametersData {
    image?: string;
    title?: string;
  }

  interface RouteEditorParametersOptions {
    adjustMapMargin?: boolean;
    float?: string;
    floatIndex?: number;
    layout?: string | interfaces.ISelectableControlLayout;
    maxWidth?: number | number[];
    position?: RouteEditorParametersOptionsPosition;
    visible?: boolean;
  }

  interface RouteEditorParametersOptionsPosition {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare var RouteEditor: RouteEditorStatic;
  declare var defaultRouteEditorParameters: RouteEditorParameters = {
    data: {
      image: 'routes',
    },
    options: {
      adjustMapMargin: false,
      float: 'right',
      floatIndex: 100,
      maxWidth: 28,
      position: {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
      },
      visible: true,
    },
  };
}
