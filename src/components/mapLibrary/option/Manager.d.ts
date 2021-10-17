namespace ymaps.option {
  interface ManagerStatic {
    new (options?: object, parent?: interfaces.IOptionManager, name?: string): Manager;
  }
  interface Manager extends interfaces.IOptionManager {
    set(key: object | string, value: any): Manager;
    unset(keys: string | string[]): Manager;
    unsetAll(): Manager;
  }

  declare var Manager: ManagerStatic;
}
