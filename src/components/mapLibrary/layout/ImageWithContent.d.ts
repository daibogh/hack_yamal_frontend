namespace ymaps.layout {
  interface ImageWithContentStatic extends ImageStatic {
    new (data: ImageWithContentData): ImageWithContent;
  }

  interface ImageWithContent extends Image {}

  interface ImageWithContentData {
    options?: ImageWithContentDataOptions;
  }
  interface ImageWithContentDataOptions {
    contentLayout?: string | Function;
    contentOffset?: number[];
    contentSize?: number[];
  }

  declare var ImageWithContent: ImageWithContentStatic;
}
