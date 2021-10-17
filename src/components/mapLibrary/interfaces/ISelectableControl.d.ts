namespace ymaps.interfaces {
  interface ISelectableControl extends IControl {
    deselect(): void;
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
    isSelected(): boolean;
    select(): void;
  }
}
