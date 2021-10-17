module ymaps {
  export class modules {
    static define(module: string, depends?: string[], resolveCallback: Function, context?: object): modules;
    static isDefined(module: string): boolean;
    static require(
      modules: string | string[],
      successCallback?: Function,
      errorCallback?: Function,
      context?: object
    ): vow.Promise;
  }
}
