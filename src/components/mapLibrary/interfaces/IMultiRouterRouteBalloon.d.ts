namespace ymaps.interfaces {
  interface IMultiRouterRouteBalloon {
    close(): vow.Promise;
    isOpen(): boolean;
    open(position?: number[]): vow.Promise;
  }
}
