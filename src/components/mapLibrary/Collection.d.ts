module ymaps {
  export class Collection implements interfaces.ICollection, collection.Item {
    constructor(options?: object);

    add(child: collection.Item): Collection;
    each(callback: Function, context?: object): Collection;
    filter(filterFunction: Function): object[];
    get(index: number): object;
    getAll(): object[];
    getIterator(): interfaces.IIterator;
    getLength(): number;
    indexOf(childToFind: object): number;
    remove(child: collection.Item): Collection;
    removeAll(): Collection;
  }
}
