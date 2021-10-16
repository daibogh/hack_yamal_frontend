module ymaps {
  export module vow {
    export class Deferred {
      promise(): Promise;
      reject(reason: object): void;
      resolve(value: object): void;
    }
  }
}
