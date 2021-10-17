module ymaps {
  export function suggest(request: string, options?: SuggestOptions): vow.Promise;

  export class SuggestOptions {
    boundedBy: number[][];
    provider: interfaces.ISuggestProvider | string = 'yandex#map';
    results: number;
  }
}
