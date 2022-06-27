import GenericType from './GenericType';

export default class ArrayType extends GenericType<string[]> {
  static type = 'array';

  empty() {
    return !this.value || !this.value.length;
  }

  size() {
    return this.value?.length || 0;
  }

  valid() {
    return !this.value || Array.isArray(this.value);
  }
}
