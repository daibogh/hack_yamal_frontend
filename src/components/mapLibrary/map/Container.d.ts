namespace ymaps.map {
  interface ContainerStatic {
    new (parentElement: string | HTMLElement): Container;
  }
  interface Container extends interfaces.IDomEventEmitter {
    enterFullscreen(): void;
    exitFullscreen(): void;
    fitToViewport(preservePixelPosition?: boolean): void;
    getElement(): HTMLElement;
    getOffset(): number[];
    getParentElement(): HTMLElement;
    getSize(): number[];
    isFullscreen(): boolean;
  }

  declare var Container: ContainerStatic;
}
