import IGenericType from './IGenericType';
import type { TypeItem } from './TypeFactory';

export default class GenericType<T> implements IGenericType<T> {
  value?: T;

  set(value: T): void {
    this.value = value;
  }

  get(): T | undefined {
    return this.value;
  }

  empty(): boolean {
    throw Error('Not Implemented');
  }

  size(): number {
    throw Error('Not Implemented');
  }

  valid(): boolean {
    return true;
  }

  equal(other: TypeItem): boolean {
    return JSON.stringify(this.value) === JSON.stringify(other.get());
  }
}
