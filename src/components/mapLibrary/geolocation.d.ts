module ymaps {
  export class geolocation {
    static get(options?: GeolocationGetOptions): vow.Promise;
  }

  export class GeolocationGetOptions {
    autoReverseGeocode: boolean = true;
    mapStateAutoApply: boolean = false;
    provider: string = 'auto';
    timeout: number = 30000;
    useMapMargin: boolean = true;
  }
}
