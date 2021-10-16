namespace ymaps.interfaces {
  interface IControlStatic {
    new (options?: object): IControl;
  }
  interface IControl extends IChildOnMap {
    options: IOptionManager;
    getParent(): IControlParent | null;
    setParent(parent: IControlParent | null): IChildOnMap;
  }
}
