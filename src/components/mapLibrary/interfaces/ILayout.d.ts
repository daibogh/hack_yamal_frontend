namespace ymaps.interfaces {
  interface ILayoutStatic {
    new (data: object): ILayout;
  }
  interface ILayout extends IDomEventEmitter {
    destroy(): void;
    getData(): object;
    getParentElement(): HTMLElement;
    getShape(): IShape | null;
    isEmpty(): boolean;
    setData(data: object): void;
    setParentElement(parent: HTMLElement | null): void;
  }
}
