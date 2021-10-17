namespace ymaps.map.margin {
  interface AccessorStatic {
    new (screenArea: object): Accessor;
  }
  interface Accessor {
    events: any;
    
    getArea(): object;
    remove(): Accessor;
    setArea(screenArea: object): Accessor;
  }

  declare var Accessor: AccessorStatic;
}
