namespace ymaps.layout.templateBased {
  interface BaseStatic extends ymaps.interfaces.ILayoutStatic {
    new (data: object): Base;
  }
  
  interface Base extends interfaces.ILayout {
    build(): void;
    clear(): void;
    getShape(): interfaces.IShape | null;
    onSublayoutSizeChange(sublayoutInfo: object, nodeSizeByContent: object): void;
    rebuild(): void;
  }

  declare var Base: BaseStatic;
}
