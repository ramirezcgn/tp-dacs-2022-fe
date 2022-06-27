import GenericType from './GenericType';

export default class NumberType extends GenericType<string> {
  static type = 'number';

  realValue?: number;

  set(value: string) {
    super.set(value);
    this.realValue = parseFloat(value);
  }

  empty() {
    return !this.realValue;
  }

  size() {
    return this.realValue || 0;
  }

  valid() {
    return !this.value || this.realValue?.toString() === this.value;
  }
}
