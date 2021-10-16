module ymaps {
  export class Panorama extends interfaces.IPanorama {
    createPlayer(element: HTMLElement | string, options?: PanoramaOptions): vow.Promise;
    getLayer(): string;
  }

  export class PanoramaOptions {
    direction: number[] | string = 'auto';
    span: number[] | string = 'auto';
  }
}
