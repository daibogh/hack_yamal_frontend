namespace ymaps.interfaces {
  interface IChildOnMap extends ymaps.interfaces.IChild {
    getParent(): IParentOnMap | null;
    setParent(parent: IParentOnMap | null): IChildOnMap;
  }
}
