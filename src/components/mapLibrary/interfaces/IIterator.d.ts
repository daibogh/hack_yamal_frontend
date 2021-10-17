namespace ymaps.interfaces {
  interface IIterator {
    STOP_ITERATION: object;
    getNext(): object | IIterator.STOP_ITERATION;
  }
}
