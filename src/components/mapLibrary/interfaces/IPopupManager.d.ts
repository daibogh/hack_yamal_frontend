namespace ymaps.interfaces {
  interface IPopupManager extends IEventEmitter {
    close(force?: boolean = false): vow.Promise;
    destroy(): void;
    getData(): object | null;
    getOptions(): IOptionManager | null;
    getOverlay(): vow.Promise;
    getOverlaySync(): IOverlay | null;
    getPosition(): number[] | null;
    isOpen(): boolean;
    open(position?: number[], data?: object | string | HTMLElement, options?: object): vow.Promise;
    setData(data: object | string | HTMLElement): vow.Promise;
    setOptions(options: object): vow.Promise;
    setPosition(position: number[]): vow.Promise;
  }
}
