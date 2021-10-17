namespace ymaps.interfaces {
  interface IRoutePanel extends IEventEmitter {
    options: IOptionManager;
    state: IDataManager;

    enable(): void;
    geolocate(name: string): vow.Promise;
    getRoute(): multiRouter.MultiRoute;
    getRouteAsync(): vow.Promise<multiRouter.MultiRoute>;
    isEnable(): boolean;
    switchPoints(): void;
  }
}
