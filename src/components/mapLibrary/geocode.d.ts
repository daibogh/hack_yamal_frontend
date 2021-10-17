module ymaps {
  export function geocode(request: string | number[], options?: GeocodeOptions): vow.Promise;

  export class GeocodeOptions {
    boundedBy: number[][];
    json: boolean = false;
    kind: 'house' | 'street' | 'metro' | 'district' | 'locality' = 'house';
    provider: string | interfaces.IGeocodeProvider = 'yandex#map';
    results: number = 10;
    searchCoordOrder: string;
    skip: number = 0;
    strictBounds: boolean = false;
  }
}
