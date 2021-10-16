namespace ymaps.event {
  interface GroupStatic {
    new (events: interfaces.IEventManager): Group;
  }
  interface Group extends interfaces.IEventGroup {
    events: interfaces.IEventManager;

    getLength(): number;
  }

  declare var Group: GroupStatic;
}
