namespace ymaps.geometry {
  interface AnimatedLineStatic {
    new (
      coordinates?: number[][] = [],
      options?: number,
      info?: {
        strokeColor: string;
        strokeWidth: number;
        animationTime: number;
      }
    ): AnimatedLine;
  }

  interface AnimatedLine{
    animate(): void;
  }

//   interface LineStringOptions {
//     coordRendering?: string;
//     geodesic?: boolean;
//     pixelRendering?: string;
//     projection?: interfaces.IProjection;
//     simplification?: boolean;
//   }

   declare var AnimatedLine:  AnimatedLineStatic;
//   declare var defaultLineStringOptions: LineStringOptions = {
//     geodesic: false,
//     pixelRendering: 'jumpy',
//     simplification: true,
//   };
}
