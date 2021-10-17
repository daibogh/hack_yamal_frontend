module ymaps {
  export class GeocodeResult extends interfaces.IGeoObject {
    getAddressLine(): string;
    getAdministrativeAreas(): string[];
    getCountry(): string | null;
    getCountryCode(): string | null;
    getLocalities(): string[];
    getPremise(): string | null;
    getPremiseNumber(): string | null;
    getThoroughfare(): string | null;
  }
}
