module ymaps {
  export class DomEvent extends interfaces.IDomEvent {
    constructor(originalEvent: DomEvent, type?: object);

    get(name: string): object;
  }
}
