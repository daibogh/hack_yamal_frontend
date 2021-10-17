module ymaps {
  export module traffic {
    export module provider {
      export class Actual extends interfaces.ITrafficProvider {
        constructor(options?: ActualOptions, state?: ActualState);

        state: data.Manager;

        update(): void;
      }

      export class ActualOptions {
        autoUpdate: boolean = true;
      }

      export class ActualState {
        infoLayerShown: boolean = false;
      }
    }
  }
}
