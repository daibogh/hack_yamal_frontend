namespace ymaps.control {
  interface GeolocationControlStatic {
    new (parameters?: GeolocationParameters = defaultGeolocationParameters): GeolocationControl;
  }
  interface GeolocationControl extends Button {}

  interface GeolocationParameters {
    data?: GeolocationParametersData;
    options?: GeolocationParametersOptions;
    state?:object;
  }

  interface GeolocationParametersData {
    image?: string;
    title?: string;
  }

  interface GeolocationParametersOptions {
    adjustMapMargin?:boolean;
    float?: string;
    floatIndex?: number;
    maxWidth?: number | number[];
    visible?: boolean;
    noPlacemark?: boolean;
    position?: GeolocationParametersOptionsPosition;
  }

  interface GeolocationParametersOptionsPosition {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare var GeolocationControl: GeolocationControlStatic;
  declare var defaultGeolocationParameters: GeolocationParameters = {
    data: {
      image: 'geolocation',
    },
    options: {
      adjustMapMargin:false,
      float: 'right',
      floatIndex: 300,
      maxWidth: 28,
      visible: true,
      noPlacemark: false,
      position: {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
      },
    },
  };
}
