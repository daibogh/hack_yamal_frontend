namespace ymaps.event {
  interface MapperStatic {
    new (targetEventManager: interfaces.IEventManager, mappingTable: object): Mapper;
  }
  interface Mapper extends interfaces.IEventTrigger {}

  declare var Mapper: MapperStatic;
}
