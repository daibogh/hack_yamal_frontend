module ymaps {
  export module util {
    export class AsyncStorage extends util.Storage {
      define(key: string, depends?: string[], resolveCallback?: Function, context?: object): AsyncStorage;
      isDefined(key: string): boolean;
      require(
        keys: string | string[],
        successCallback?: Function,
        errorCallback?: Function,
        context?: object
      ): vow.Promise;
    }
  }
}
