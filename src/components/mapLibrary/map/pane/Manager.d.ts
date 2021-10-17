namespace ymaps.map.pane {
  interface ManagerStatic {
    new (map: ymaps.Map): Manager;
  }
  interface Manager {
    append(key: string, pane: interfaces.IPane): void;
    destroy(): void;
    get(key: string): interfaces.IPane | null;
    getLower(): string;
    getUpper(): string;
    insertBefore(key: string, pane: interfaces.IPane, referenceKey: string): void;
    remove(pane: interfaces.IPane): void;
  }

  declare var Manager: ManagerStatic;
}
