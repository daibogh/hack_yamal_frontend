module ymaps {
  export module router {
    export class Editor implements interfaces.ICustomizable, interfaces.IEventEmitter { //??
      state: EditorState;
      start(options?: EditorStartOptions): void;
      stop(): void;
    }

    export class EditorState extends interfaces.IDataManager {
      routeloading: boolean;
      waypointsdrag: boolean;
      viapointsdrag: boolean;
    }

    export class EditorStartOptions {
      addViaPoints: boolean = true;
      addWayPoints: boolean = false;
      editViaPoints: boolean = true;
      editWayPoints: boolean = true;
      removeViaPoints: boolean = true;
      removeWayPoints: boolean = false;
    }
  }
}
