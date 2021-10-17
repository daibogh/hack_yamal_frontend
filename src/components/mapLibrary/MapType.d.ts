module ymaps {
  export class MapType {
    constructor(name: string, layers: Function[] | string[]);

    getLayers(): Function[] | string[];

    getName(): string;
  }
}
