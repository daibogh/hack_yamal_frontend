module ymaps {
  export module traffic {
    export module provider {
      export class Archive extends interfaces.ITrafficProvider {
        constructor(options?: ArchiveOptions, state?: ArchiveState);

        state: data.Manager;

        getTime(): ArchiveTime | null;
        setTime(time: ArchiveTime, callback?: Function): void;
      }

      export class ArchiveTime {
        dayOfWeek: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
        hours: number;
        minutes: number;
      }

      export class ArchiveOptions {
        showCurrentTimeFirst: boolean = true;
      }

      export class ArchiveState {
        timestamp: number;
      }
    }
  }
}
