namespace ymaps.interfaces {
  interface IOptionManager extends IChild, IEventEmitter, IFreezable {
    get(key: string, defaultValue?: object): any;
    getAll(): object;
    getName(): string;
    getNative(key: string): object;
    getParent(): IOptionManager | null;
    resolve(key: string, name?: string): object;
    setName(name: string): void;
    setParent(parent: IOptionManager | null): IChild;
  }
}
