namespace ymaps.control {
  interface ListBoxItemStatic {
    new (parameters?: string | ListBoxItemParameters): ListBoxItem;
  }

  interface ListBoxItem extends interfaces.ICustomizable, interfaces.ISelectableControl {
    data: data.Manager;
    state: data.Manager;

    getMap(): ymaps.Map;
    getParent(): interfaces.IControlParent | null;
    setParent(parent: interfaces.IControlParent | null): interfaces.IChildOnMap;
  }

  interface ListBoxItemParameters {
    data?: ListBoxItemParametersData;
    items?: interfaces.IControl[];
    options?: ListBoxItemParametersOptions;
    state?: ListBoxItemParametersState;
  }

  interface ListBoxItemParametersData {
    content?: string;
  }

  interface ListBoxItemParametersOptions {
    layout?: string | Function;
    selectableLayout?: string | Function;
    selectOnClick?: boolean;
    separatorLayout?: string | Function;
    type?: 'selectable' | 'separator';
    visible?: boolean;
  }
  interface ListBoxItemParametersState {
    selected?: boolean;
  }

  declare var ListBoxItem: ListBoxItemStatic;
  declare var defaultListBoxItemParameters: ListBoxItemParameters = {
    options: {
      layout: 'islands#listBoxItemLayout',
      selectableLayout: 'islands#listBoxItemSelectableLayout',
      selectOnClick: true,
      separatorLayout: 'islands#listBoxItemSeparatorLayout',
      type: 'selectable',
      visible: true,
    },
    state: {
      selected: false,
    },
  };
}
