namespace ymaps.data {
  interface ManagerStatic {
    new (data: object): Manager;
  }
  interface Manager extends interfaces.IDataManager, interfaces.IFreezable {
    get(path: string, defaultValue?: object): object;
    getAll(): object;
    set(path: object | string, value: object | string | boolean): Manager;
    setAll(): Manager;
    unset(path: string | string[]): Manager;
    unsetAll(): Manager;
  }

  declare var Manager: ManagerStatic;
}
