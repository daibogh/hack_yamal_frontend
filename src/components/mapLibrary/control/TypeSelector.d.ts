namespace ymaps.control {
  interface TypeSelectorStatic {
    constructor(
      parameters?: string[] | MapType[] | TypeSelectorParameters = defaultTypeSelectorParameters
    ): TypeSelector;
  }
  interface TypeSelector extends ListBox {
    data: data.Manager;

    addMapType(mapType: string | MapType, positionIndex?: number): TypeSelector;
    getMap(): ymaps.Map;
    removeAllMapTypes(): TypeSelector;
    removeMapType(mapType: string | MapType): TypeSelector;
  }

  interface TypeSelectorParameters {
    mapTypes?: string[] | MapType[];
    options?: TypeSelectorParametersOptions;
    state?: TypeSelectorParametersState;
  }

  interface TypeSelectorParametersOptions {
    adjustMapMargin?: boolean;
    collapseOnBlur?: boolean;
    collapseTimeout?: number;
    expandOnClick?: boolean;
    float?: string;
    floatIndex?: number;
    layout?: string | Function;
    maxWidth?: number | number[];
    panoramasItemMode?: string;
    position?: TypeSelectorParametersOptionsPosition;
    visible?: boolean;
  }

  interface TypeSelectorParametersOptionsPosition {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  interface TypeSelectorParametersState {
    extended?: boolean;
  }

  declare var TypeSelector: TypeSelectorStatic;
  declare var defaultTypeSelectorParameters: TypeSelectorParameters = {
    options: {
      adjustMapMargin: false,
      collapseOnBlur: true,
      collapseTimeout: 3000,
      expandOnClick: true,
      float: 'right',
      floatIndex: 200,
      maxWidth: [30, 65, 85],
      panoramasItemMode: 'ifMercator',
      position: {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
      },
      visible: true,
    },
    state: {
      extended: false,
    },
  };
}
