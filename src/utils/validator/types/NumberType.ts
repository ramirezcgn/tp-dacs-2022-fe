import GenericType from './GenericType';

export default class NumberType extends GenericType<string> {
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
