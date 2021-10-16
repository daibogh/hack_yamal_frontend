namespace ymaps.control {
  interface SearchControlStatic {
    new (parameters?: SearchControlParameters = defaultSearchControlParameters): SearchControl;
  }
  interface SearchControl extends interfaces.IControl, interfaces.ICustomizable {
    state: data.Manager;

    clear(): void;
    getMap(): ymaps.Map;
    getRequestString(): string;
    getResponseMetaData(): object;
    getResult(index: number): vow.Promise;
    getResultsArray(): object[];
    getResultsCount(): number;
    getSelectedIndex(): number;
    hideResult(): void;
    search(request: string, options: object): vow.Promise;
    showResult(index: number): control.SearchControl;
  }

  interface SearchControlParameters {
    data?: object;
    options?: SearchControlParametersOptions| ymaps.PlacemarkOptions
    state?: object;
  }

  interface SearchControlParametersOptions {
    adjustMapMargin?: boolean;
    boundedBy?: number[][];
    fitMaxWidth?: boolean;
    float?: string;
    floatIndex?: number;
    formLayout?: string | interfaces.ILayout;
    kind?: string;
    layout?: string | interfaces.ISearchControlLayout;
    maxWidth?: number | number[];
    noCentering?: boolean;
    noPlacemark?: boolean;
    noPopup?: boolean;
    noSelect?: boolean;
    noSuggestPanel?: boolean;
    placeholderContent?: string;
    popupItemLayout?: string | interfaces.ILayout;
    popupLayout?: string | interfaces.ILayout;
    position?: SearchControlParametersOptionsPosition;
    provider?: string | interfaces.IGeocodeProvider;
    searchCoordOrder?: string;
    size?: string;
    strictBounds?: boolean;
    suppressYandexSearch?: boolean;
    useMapBounds?: boolean;
    zoomMargin?: number;
  }

  interface SearchControlParametersOptionsPosition {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare var SearchControl: SearchControlStatic;
  declare var defaultSearchControlParameters: SearchControlParameters = {
    options: {
      adjustMapMargin: false,
      fitMaxWidth: false,
      float: 'right',
      floatIndex: 200,
      formLayout: 'islands#searchControlFormLayout',
      kind: 'house',
      layout: 'islands#searchControlLayout',
      maxWidth: [30, 72, 315],
      noCentering: false,
      noPlacemark: false,
      noPopup: false,
      noSelect: false,
      noSuggestPanel: false,
      popupItemLayout: 'islands#searchControlPopupItemLayout',
      popupLayout: 'islands#searchControlPopupLayout',
      position: {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
      },
      provider: 'yandex#map',
      searchCoordOrder: 'latlong',
      size: 'auto',
      suppressYandexSearch: false,
      zoomMargin: 0,
    },
  };
}
