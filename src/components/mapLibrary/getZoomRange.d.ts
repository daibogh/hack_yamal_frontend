module ymaps {
  export function getZoomRange(
    mapType: string | MapType,
    coords: number[],
    customizable: interfaces.ICustomizable = null
  ): vow.Promise;
}
