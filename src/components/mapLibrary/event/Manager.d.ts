namespace ymaps.event {
  interface ManagerStatic {
    new (params?: ManagerParameters): Manager;
  }
  interface Manager extends interfaces.IEventManager {
    createEventObject(type: string, event: object, target: object): ymaps.Event;
    fire(type: string, event: object | ymaps.Event): Manager;
    setParent(parent: interfaces.IEventManager | null): Manager;
  }

  interface ManagerParameters {
    context?: object;
    controllers?: interfaces.IEventWorkflowController[];
    parent?: interfaces.IEventManager;
  }

  declare var Manager: ManagerStatic;
}
