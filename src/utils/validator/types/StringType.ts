import GenericType from './GenericType';

export default class StringType extends GenericType<string> {
  empty() {
    return !this.value;
  }

  size() {
    return this.value?.length || 0;
  }
}
