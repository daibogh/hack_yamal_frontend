namespace ymaps.behavior {
  interface DragStatic {
    new (options?: DragOptions = defaultDragOptions): Drag;
  }

  interface Drag extends ymaps.interfaces.IBehavior {}

  interface DragOptions {
    actionCursor?: string;
    cursor?: string;
    inertia?: boolean;
    inertiaDuration?: number | string;
    tremor?: number;
  }

  declare var Drag: DragStatic;
  declare var defaultDragOptions: DragOptions = {
    actionCursor: 'grabbing',
    cursor: 'grab',
    inertia: true,
    inertiaDuration: 400,
    tremor: 2,
  };
}
