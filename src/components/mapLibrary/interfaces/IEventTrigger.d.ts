namespace ymaps.interfaces {
  interface IEventTrigger {
    fire(type: string, eventObject?: ymaps.interfaces.IEvent | object): IEventTrigger;
  }
}
