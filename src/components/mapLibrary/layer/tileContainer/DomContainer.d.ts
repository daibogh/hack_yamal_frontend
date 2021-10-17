namespace ymaps.layer.tileContainer {
  interface DomContainerStatic {
    new (layer: interfaces.ILayer, options?: DomContainerOptions = defaultDomContainerOptions): DomContainer;
  }
  
  interface DomContainer extends interfaces.IChildOnMap {
    getMap(): Map;
    getTile(tileNumber: number[], tileZoom: number, priority: number): interfaces.IDomTile;
  }

  interface DomContainerOptions {
    notFoundTile?: string | null;
    tileClass?: string | interfaces.IDomTile;
    tileTransparent?: boolean;
  }

  declare var DomContainer: DomContainerStatic;
  declare var defaultDomContainerOptions: DomContainerOptions = {
    notFoundTile: null,
    tileClass: 'default#dom',
    tileTransparent: false,
  };
}
