module ymaps {
  export module util {
    export module cursor {
      export class Accessor {
        constructor(key: string);
        
        getKey(): string;
        remove(): void;
        setKey(key: string): void;
      }
    }
  }
}
