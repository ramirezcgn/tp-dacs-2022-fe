import type { TypeItem } from './TypeFactory';

export default interface IGenericType<T> {
  set(value: T): void;
  get(): T | undefined;
  empty(): boolean;
  size(): number;
  valid(): boolean;
  equal(other: TypeItem): boolean;
}
