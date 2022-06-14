import { usernameRegex, emailRegex } from '_constants';
import { ExtractInstanceType } from './common';

interface IGenericType<T> {
  set(value: T): void;
  get(): T | undefined;
  empty(): boolean;
  size(): number;
  valid(): boolean;
  equal(other: TypeItem): boolean;
}

class GenericType<T> implements IGenericType<T> {
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

class TypeString extends GenericType<string> {
  empty() {
    return !this.value;
  }

  size() {
    return this.value?.length || 0;
  }
}

class TypeNumber extends GenericType<string> {
  realValue?: number;

  set(value: string) {
    super.set(value);
    this.realValue = parseInt(value, 10);
  }

  empty() {
    return !this.realValue;
  }

  size() {
    return this.realValue || 0;
  }

  valid() {
    return this.realValue?.toString() === this.value;
  }
}

class TypeArray extends GenericType<string[]> {
  empty() {
    return !this.value || !this.value.length;
  }

  size() {
    return this.value?.length || 0;
  }

  valid() {
    return Array.isArray(this.value);
  }
}

class TypeEmail extends TypeString {
  valid() {
    return emailRegex.test(this.value || '');
  }
}

class TypeUsername extends TypeString {
  valid() {
    return usernameRegex.test(this.value || '');
  }
}

const typesMap = {
  text: TypeString,
  number: TypeNumber,
  array: TypeArray,
  email: TypeEmail,
  username: TypeUsername,
};

export type TypeKey = keyof typeof typesMap;
type typeofTypes = typeof typesMap[TypeKey];
export type TypeItem = ExtractInstanceType<typeofTypes, any>;

export class TypeFactory {
  static createInstance(type: TypeKey): TypeItem {
    if (!(type in typesMap)) {
      throw Error('Invalid data type');
    }
    return new typesMap[type]();
  }
}
