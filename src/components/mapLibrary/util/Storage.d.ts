module ymaps {
  export module util {
    export class Storage {
      add(key: string, object: object): Storage;
      get(key: string | object): object;
      remove(key: string): Storage;
    }
  }
}
