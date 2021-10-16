module ymaps {
  export module panorama {
    export class Player extends interfaces.IEventEmitter {
      constructor(element: HTMLElement | string, panorama: interfaces.IPanorama, options?: Options);

      destroy(): void;
      fitToViewport(): void;
      getDirection(): number[];
      getPanorama(): interfaces.IPanorama;
      getSpan(): number[];
      lookAt(point: number[]): Player;
      moveTo(point: number[], options?: MoveToOptions);
      setDirection(direction: number[] | string): Player;
      setPanorama(panorama: interfaces.IPanorama): Player;
      setSpan(span: number[] | string): Player;
    }

    export class Options {
      autoFitToViewport: string = 'always';
      controls: string[];
      direction: number[] | string = 'auto';
      hotkeysEnabled: boolean = false;
      scrollZoomBehavior: boolean = true;
      span: number[] | string = 'auto';
      suppressMapOpenBlock: boolean = false;
    }

    export class MoveToOptions {
      direction: number[] | string = 'auto';
      layer: 'yandex#airPanorama' | 'yandex#panorama' = 'yandex#panorama';
      span: number[] | string = 'auto';
    }
  }
}
