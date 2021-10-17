module ymaps {
  export module util {
    export var hd: HD;

    export class HD {
      getPixelRatio(): number;
      selectRatio(hash: interfaces.IRatioMap): number;
      selectValue(hash: object | interfaces.IRatioMap): object;
    }
  }
}
