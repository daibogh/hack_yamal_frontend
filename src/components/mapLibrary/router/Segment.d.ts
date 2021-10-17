module ymaps {
  export module router {
    export class Segment {
      getAction(): string;
      getAngle(): number;
      getCoordinates(): number[][];
      getHumanAction(): string;
      getHumanJamsTime(): string;
      getHumanLength(): string;
      getHumanTime(): string;
      getIndex(): number;
      getJamsTime(): number;
      getLength(): number;
      getPolylineEndIndex(): number;
      getPolylineStartIndex(): number;
      getStreet(): string;
      getTime(): number;
    }
  }
}
