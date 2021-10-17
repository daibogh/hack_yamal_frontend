namespace ymaps.layout {
  interface ImageStatic extends ymaps.interfaces.ILayoutStatic {
    new (data: ImageData): Image;
  }

  interface Image extends interfaces.ILayout {}

  interface ImageData {
    options?: ImageDataOptions;
  }

  interface ImageDataOptions {
    imageClipRect?: number[][];
    imageHref?: string;
    imageOffset?: number[];
    imageSize?: number[];
    shape?: interfaces.IShape | object | null;
  }

  declare var Image: ImageStatic;
}
