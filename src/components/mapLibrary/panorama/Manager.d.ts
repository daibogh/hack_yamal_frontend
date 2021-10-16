module ymaps {
  export module panorama {
    export class Manager extends interfaces.IEventEmitter {
      closePlayer(): void;
      disableLookup(): void;
      enableLookup(): void;
      getPlayer(): Player;
      isLookupEnabled(): boolean;
      openPlayer(panorama: interfaces.IPanorama | number[], locateOptions?: object, options?: Options);
    }

    export class Options {
      direction: number[] | string = 'auto'; //type??
    }
  }
}
