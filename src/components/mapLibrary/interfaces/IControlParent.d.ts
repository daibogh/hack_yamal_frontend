namespace ymaps.interfaces {
  interface IControlParent extends IParentOnMap {
    state: IDataManager;
    getChildElement(child: IControl): vow.Promise;
  }
}
