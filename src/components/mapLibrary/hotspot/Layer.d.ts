namespace ymaps.hotspot {
  interface LayerStatic {
    new (objectSource: interfaces.IHotspotObjectSource, options?: LayerOptions = defaultLayerOptions): Layer;
  }
  interface Layer extends interfaces.IChildOnMap, interfaces.ICustomizable {
    balloon: layer.Balloon;
    hint: layer.Hint;

    getMap(): Map;
    getObjectInPosition(coords: number[]): vow.Promise;
    getObjectsInPosition(coords: number[]): vow.Promise;
    getObjectSource(): interfaces.IHotspotObjectSource;
    update(): void;
  }

  interface LayerOptions {
    cursor?: string;
    dontChangeCursor?: boolean;
    hasBalloon?: boolean;
    hasHint?: boolean;
    interactivityModel?: string;
    openBalloonOnClick?: boolean;
    openEmptyBalloon?: boolean;
    openEmptyHint?: boolean;
    openHintOnHover?: boolean;
    pane?: string | interfaces.IEventPane;
    zIndex?: number;
  }

  declare var Layer: LayerStatic;
  declare var defaultLayerOptions: LayerOptions = {
    cursor: 'pointer',
    dontChangeCursor: false,
    hasBalloon: true,
    hasHint: true,
    interactivityModel: 'default#layer',
    openBalloonOnClick: true,
    openEmptyBalloon: false,
    openEmptyHint: false,
    openHintOnHover: true,
    pane: 'events',
  };
}
