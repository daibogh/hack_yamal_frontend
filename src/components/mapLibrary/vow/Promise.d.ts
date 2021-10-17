module ymaps {
  export module vow {
    export class Promise {
      constructor(resolver?: Function);

      done(onFulfilled?: Function, onRejected?: Function, onProgress?: Function, ctx?: object);

      spread(onFulfilled?: Function, onRejected?: Function, ctx?: object): Promise;

      then(onFulfilled?: Function, onRejected?: Function, onProgress?: Function, ctx?: object): Promise;

      valueOf(): object;
    }
  }
}
