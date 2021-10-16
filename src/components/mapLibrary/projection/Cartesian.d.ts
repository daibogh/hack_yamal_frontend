module ymaps {
  export module projection {
    export class Cartesian extends interfaces.IProjection {
      constructor(bounds: number[][], cycled?: boolean[] = [false, false], scale?: number | number[] = 1);
    }
  }
}
