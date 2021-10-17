module ymaps {
  export module panorama {
    export function createPlayer(element: HTMLElement | string, point: number[], options?: Options): vow.Promise;
  }

  export class Options {
    direction: number[] | string = 'auto';
    layer: 'yandex#airPanorama' | 'yandex#panorama' = 'yandex#panorama';
    span: number[] | string = 'auto';
  }
}
