module ymaps {
  export class Monitor {
    constructor(dataManager: interfaces.IDataManager | interfaces.IOptionManager);

    add(name: string | string[], changeCallback: Function, context?: object, params?: MonitorAddParams);
    forceChange(): Monitor;
    get(name: string): object;
    remove(name: string | string[]): Monitor;
    removeAll(): Monitor;
  }

  export interface MonitorAddParams {
    compareCallback?: Function;
    compareCallbacks?: object;
    defaultValue?: object;
    defaultValues?: object;
    resolveCallback?: Function;
    resolveCallbacks?: object;
  }
}
