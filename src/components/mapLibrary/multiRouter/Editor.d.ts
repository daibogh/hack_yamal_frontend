namespace ymaps.multiRouter {
  interface EditorStatic {
    new (multiRoute: MultiRoute, state?: object, options?: EditorOptions = defaultEditorOptions): Editor;
  }
  interface Editor extends interfaces.ICustomizable, interfaces.IEventEmitter {
    state: data.Manager;

    destroy(): void;
    getMultiRoute(): MultiRoute;
  }

  interface EditorOptions {
    drawCursor?: object;
    drawOver?: object | boolean;
    midPointsType?: 'way' | 'via';
  }

  declare var Editor: EditorStatic;
  declare var defaultEditorOptions: EditorOptions = {
    drawOver: true,
    midPointsType: 'way',
  };
}
