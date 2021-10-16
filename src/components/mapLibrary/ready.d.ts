module ymaps {
  export function ready(successCallback?: Function | ReadyParameters, errorCallback?: Function, context?: object): ymaps.vow.Promise;

  export class ReadyParameters {
    require: string[];
    successCallback: Function;
    errorCallback: Function;
    context: object; 
  }
}
