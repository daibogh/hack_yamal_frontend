namespace ymaps.collection {
  interface ItemStatic {
    new (options?: object): Item;
  }
  interface Item
    extends interfaces.IChildOnMap,
      interfaces.ICustomizable,
      interfaces.IEventEmitter,
      interfaces.IParentOnMap {
    getMap(): ymaps.Map;
    getParent(): interfaces.IParentOnMap;
    onAddToMap(map: ymaps.Map): void;
    onRemoveFromMap(oldMap: ymaps.Map): void;
    setParent(parent: interfaces.IParentOnMap): Item;
  }

  declare var Item: ItemStatic;
}
