namespace ymaps.control {
  interface TrafficControlStatic {
    new (parameters?: TrafficControlParameters = defaultTrafficControlParameters): TrafficControl;
  }
  interface TrafficControl extends interfaces.IControl, interfaces.ICustomizable {
    data: data.Manager;
    state: data.Manager;

    collapse(): void;
    expand(): void;
    getMap(): ymaps.Map;
    getProvider(key?: string): interfaces.ITrafficProvider;
    hideTraffic(): void;
    isExpanded(): boolean;
    isTrafficShown(): boolean;
    showTraffic(): void;
  }

  interface TrafficControlParameters {
    options?: TrafficControlParametersOptions;
    state?: TrafficControlParametersState;
  }

  interface TrafficControlParametersOptions {
    adjustMapMargin?: boolean;
    collapseOnBlur?: boolean;
    float?: 'left' | 'right' | 'none';
    floatIndex?: number;
    layout?: string | Function;
    maxWidth?: number | number[];
    position?: TrafficControlParametersOptionsPosition;
    size?: 'small' | 'large' | 'auto';
    visible?: boolean;
  }

  interface TrafficControlParametersOptionsPosition {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }
  interface TrafficControlParametersState {
    providerKey?: string;
    trafficShown?: boolean;
  }

  declare var TrafficControl: TrafficControlStatic;
  declare var defaultTrafficControlParameters: TrafficControlParameters = {
    options: {
      adjustMapMargin: false,
      collapseOnBlur: true,
      float: 'right',
      floatIndex: 100,
      maxWidth: [26, 195, 195],
      position: {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
      },
      size: 'auto',
      visible: true,
    },
    state: {
      providerKey: 'traffic#actual',
      trafficShown: false,
    },
  };
}
