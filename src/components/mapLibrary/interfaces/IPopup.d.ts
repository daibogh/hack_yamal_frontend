namespace ymaps.interfaces {
  interface IPopup extends ICustomizable, IEventEmitter {
    close(force?: boolean): vow.Promise;
    getData(): any;
    getOverlay(): vow.Promise;
    getOverlaySync(): IOverlay;
    getPosition(): any;
    isOpen(): boolean;
    open(position?: number[], data?: string | HTMLElement | object): vow.Promise;
    setData(data: string | HTMLElement | object): vow.Promise;
    setPosition(position: number[]): vow.Promise;
  }
}
