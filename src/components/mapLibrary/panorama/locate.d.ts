module ymaps {
  export module panorama {
    export function locate(point: number, options?: Options): vow.Promise;
  }

  export class Options {
    layer: 'yandex#airPanorama' | 'yandex#panorama' = 'yandex#panorama';
  }
}
