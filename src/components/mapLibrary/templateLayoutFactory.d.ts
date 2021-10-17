module ymaps {
  export var templateLayoutFactory: TemplateLayoutFactory;

  export class TemplateLayoutFactory {
    createClass(template: string, overrides?: object, staticMethods?: object): Function;
  }
}
