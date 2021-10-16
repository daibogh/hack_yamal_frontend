namespace ymaps.control {
  interface ListBoxStatic {
    new (parameters: ListBoxParameters = defaultListBoxParameters): ListBox;
  }

  interface ListBox extends interfaces.ICollection, interfaces.IControl, interfaces.ICustomizable {
    data: data.Manager;
    state: data.Manager;

    collapse(): ListBox;
    expand(): ListBox;
    getMap(): ymaps.Map;
    isExpanded(): boolean;
  }

  interface ListBoxParameters {
    data?: ListBoxParametersData;
    items?: interfaces.IControl[];
    options?: ListBoxParametersOptions;
    state?: ListBoxParametersState;
  }

  interface ListBoxParametersData {
    content?: string;
    image?: string;
    title?: string;
  }

  interface ListBoxParametersOptions {
    adjustMapMargin?: boolean;
    collapseOnBlur?: boolean;
    expandOnClick?: boolean;
    float?: string;
    floatIndex?: number;
    layout?: string | Function;
    maxWidth?: number | number[];
    popupFloat?: string;
    position?: ListBoxParametersOptionsPosition;
    visible?: boolean;
  }

  interface ListBoxParametersOptionsPosition {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  interface ListBoxParametersState {
    expanded?: boolean;
  }

  declare var ListBox: ListBoxStatic;
  declare var defaultListBoxParameters: ListBoxParameters = {
    options: {
      adjustMapMargin: false,
      collapseOnBlur: true,
      expandOnClick: true,
      float: 'right',
      floatIndex: 0,
      maxWidth: 90,
      position: {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
      },
      visible: true,
    },
    state: {
      expanded: false,
    },
  };
}
