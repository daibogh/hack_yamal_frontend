namespace ymaps.interfaces {
  interface IEventController {
    onStartListening(events: IEventManager, type: string): void;
    onStopListening(events: IEventManager, type: string): any;
  }
}
