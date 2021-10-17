namespace ymaps.interfaces {
  interface IPane extends IEventEmitter {
    destroy(): void;
    getElement(): HTMLElement;
    getMap(): ymaps.Map;
    getOverflow(): 'visible' | 'hidden';
    getZIndex(): number;
  }
}
