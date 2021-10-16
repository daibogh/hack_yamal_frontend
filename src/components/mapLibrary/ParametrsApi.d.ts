module ymaps {
  export class ParametrsApi {
    apikey: string;
    lang: 'ru_RU' | 'en_US' | 'en_RU' | 'ru_UA' | 'uk_UA' | 'tr_TR';
    coordorder?: 'latlong' | 'longlat' = 'latlong';
    load?: string = 'package.full';
    mode?: 'release' | 'debug' = 'release';
    csp?: string;
    ns?: string = 'ymaps';
    onload?: string;
    onerror?: string;
  }
}
